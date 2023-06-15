# hj-node-util v1.1.0
hj's node.js util

## Installtion
### Using npm:

    $ npm i --save hjutil


### In Node.js:

#### httpRequest
```
    import { httpRequest } from 'hjutil'

    /**
     * httpRequest
     * parameters:
     *  targetURL, httpMethod, retry, timeToDelay
     */
    let response = await httpRequest("http://localhost", "GET", 3, 500)
```

#### restapi
```
    import { restapi } from 'hjutil'

    /**
     * httpRequest
     * parameters:
     *   targetURL, requestParams
     *   requestParams:
     *     { httpMethod, retry, timeTodelay, params(option), data(option) }
     */
    const requestParams = {
        httpMethod:"GET",
        retry:3,
        timeToDelay:500
    }
    let response = await restapi.httpRequest("http://localhost", requestParams)
```

#### mysql
```
    import { mysql } from 'hjutil'
    /**
     * createPool
     * parameters:
     *   config:
     *     { host, port, user, password, database, connectionLimit }
     */
     const config = {
        host: 'localhost',
        port: 3306,
        user: 'user',
        password: 'password',
        database: 'database-name',
        connectionLimit: 5
    }
    await mysql.createPool(config)

    /**
     * executeQuery
     * parameters:
     *   query, params
     */
    const query = `SELECT * FROM table_name WHERE id=? AND type=?;`
    const params = ['hj', 'man']
    let data = await mysql.executeQuery(query, params)
```

See the package source for more details.
