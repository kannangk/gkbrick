const express = require('express')
const app = express()
const { Module } = require('configs/Module')
app.listen((3000, () => {console.log("connection 3000")}))
//init all module
const mod = new Module(app)
mod.bodyParser()
mod.dotenv()
mod.template()
mod.assets()
mod.morgan()


module.exports = { app }
