const isEmpty = ( value ) => {
    if( value == ""
        || value == null
        || value == undefined
        || (value != null && typeof value == "object" && !Object.keys(value).length)
    )
    {
        return true
    }
    else {
        return false
    }
}

const sleep = ( ms ) => {
    return new Promise(resolve => {
        setTimeout(resolve, ms)
    })
}

module.exports = {
    isEmpty,
    sleep
}