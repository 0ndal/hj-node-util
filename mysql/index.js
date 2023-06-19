const mysql = require('mysql2/promise')

var pool

/**
 * DB connedtion pool 생성
 */
const createPool = async (config) => {
    pool = mysql.createPool(config)
}

/**
 * 단순쿼리 실행
 * @param querys
 * @param paramsList
 */
const executeQuery = async (query, params) => {
    const conn = await pool.getConnection()

    let result = null

    try {
        // DB Transaction 쿼리 실행 부분 START
        const data = await conn.query(query, params)
        result = data[0]
        // DB Transaction 쿼리 실행 부분 END

        // 커밋
        await conn.commit()
        // connection 반환
        await conn.release()
        return result
    } catch (e) {
        // 롤백
        await conn.rollback()
        // connection 반환
        await conn.release()
        throw e
    }
}

/**
 * 다중 쿼리 실행
 * @param querys
 * @param paramsArray
 */
const executeQuerys = async (querys, paramsArray) => {
    // connection 요청
    const conn = await pool.getConnection()

    let result = []

    try {
        // DB Transaction 쿼리 실행 부분 START
        for(let i = 0; i < querys.length; i++) {
            let data = await conn.query(querys[i], paramsArray[i])
            result.push(data[0])
        }
        // DB Transaction 쿼리 실행 부분 END

        // 커밋
        await conn.commit()
        // connection 반환
        await conn.release()
        return result
    } catch (e) {
        // 롤백
        await conn.rollback()
        // connection 반환
        await conn.release()
        throw e
    }
}

module.exports = {
    createPool,
    executeQuery,
    executeQuerys
}