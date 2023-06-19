// import * as restapi from './restapi/index.js'
// import * as common from './common/index.js'
// import * as mysql from './mysql/index.js'
const restapi = require("./restapi/index")
const common = require("./common/index")
const mysql = require("./mysql/index")

/**
 * rest api http request
 */
const httpRequest = async ( targetURL, httpMethod, retry, timeToDelay ) => {
    const datas = {
        httpMethod,
        retry,
        timeToDelay
    }
    
    try {
        let response = await restapi.httpRequest(targetURL, datas)
        return response
    }
    catch (e) {
        throw new Error(error)
    }
}

module.exports = {
    httpRequest,
    restapi,
    common,
    mysql
}