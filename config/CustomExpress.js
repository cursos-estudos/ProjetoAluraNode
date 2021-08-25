const express = require('express')
const consign = require('consign')
const BodyParser = require('body-parser')


module.exports = () => {
    const app = express()

    app.use(BodyParser.urlencoded({extended: true}))
    app.use(BodyParser.json())

    consign()
        .include('Controllers')
        .into(app)

    return app
}