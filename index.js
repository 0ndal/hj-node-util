import * as restapi from './restapi/index.js'
import * as common from './common/index.js'

/**
 * rest api http request
 */
const httpRequest = ( targetURL, httpMethod, retry, timeToDelay ) => {
    const datas = {
        httpMethod,
        retry,
        timeToDelay
    }
    
    try {
        restapi.httpRequest(targetURL, datas).then((response) => {
            return response
        }).catch(error => {
            throw new Error(error)
        });
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