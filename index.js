import * as restapi from './restapi/index.js'
import * as common from './common/index.js'

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

/**
 * null check
 */
const isEmpty = ( value ) => {
    return common.isEmpty(value)
}

/**
 * async sleep 
 */
const sleep = async ( ms ) => {
    await common.sleep(ms)
}

export {
    httpRequest,
    isEmpty,
    sleep
}