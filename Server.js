const express = require('express')
const app = express()
const m1_router = require("./Routers/m1-route")

app.use("/", m1_router)

app.use("/page1", (req, res, next) => {
    console.log(req.url + " requested")
    next()
})

app.get("/", (req, res) => {
    res.send('Hello World')
})

app.get("/h*", function(req, res) {
    res.send('H GET route');
})

app.get("/products/:id/:name")

app.get("/page1", (req, res, next) => {
    //console.log("page1 called")
    res.write("handler1 \n")
    next()
}, (req, res) => {
    res.write("handler2")
    res.end()
})

app.get("/page2", (req, res, next) => {
    res.write("handler 3 \n")
    next()
}, (req, res, next) => {
    res.write("handler 4 \n")
    next()
}, (req, res) => {
    res.write("handler 5 ")
    res.end()
})

app.listen(8000, () => {
    console.log('Listning prot 8000')
})
