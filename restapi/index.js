import axios, * as others from 'axios'
import * as common from '../common/index.js'

const httpRequest = async ( targetURL, requestParams ) => {
    let {
        httpMethod,
        retry = 0,
        timeToDelay = 0,
        params = null,
        data = null
    } = requestParams

    console.log("REST API request ===========================>")
    if(common.isEmpty(targetURL)) {
        throw new Error("targetURL is NULL !!")
    }
    console.log(" Target URL    : " + targetURL)
    if(common.isEmpty(httpMethod)) {
        throw new Error("httpMethod is NULL !!")
    }
    console.log(" HTTP Method   : " + httpMethod)

    let axiosParams = {
        url: targetURL,
        method: httpMethod
    }
    
    console.log(" Retry         : " + retry)
    if(retry > 0) {
        console.log(" Time To Delay : " + timeToDelay)
    }
    if(!common.isEmpty(params)) {
        console.log(" Params        : " + params)
        axiosParams.params = params
    }
    if(!common.isEmpty(data)) {
        console.log(" data          : " + data)
        axiosParams.data = data
    }

    let response
    for(let i=0; i<=retry; i++) {
        try {
            response = await run(axiosParams)

            if(response.status == 200) {
                break;
            }
            else {
                console.log(" status : "+ response.status)
                console.log(" data : " + data)
            }
        }
        catch(error) {
            console.log(error);
        }
        console.log("REST API Fail !!! Retry(" + i + ")")
        await common.sleep(timeToDelay)
    }
    
    console.log("<=========================== REST API request")
    return response
}

const run = async ( axiosParams ) => {
    try {
        let response = await axios(axiosParams)
        return response
    }
    catch(e) {
        throw new Error(e)
    }
}

export { httpRequest }