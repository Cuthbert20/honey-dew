const express = require('express')
const app = express()
const massive = require('massive')
const ctrl = require('./todoController')
require('dotenv').config()

const { SERVER_PORT, CONNECTION_STRING } = process.env

app.use(express.json())

massive(CONNECTION_STRING)
.then(dbInstance => {
    app.set('db', dbInstance)

    app.listen(SERVER_PORT, () => console.log(`I have ${SERVER_PORT} years left to live`))

}).catch(err => console.log(err, "Can't connect to DB"))
