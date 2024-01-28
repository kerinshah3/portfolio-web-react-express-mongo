const express = require('express')
const mongoose = require('mongoose')
require('./model/apiSecret')
require('./model/portfolioStock')
const {mongoUri, port} = require("./key");

const dotenv = require('dotenv');
dotenv.config();

const app = express()
//Routes
var yahooFinanceAPI = require('./routes/yahooFinanceRoutes');
var apiSecret = require('./routes/admin/secretRoutes');
var getAccessToken = require('./routes/getAccessTokenRouter');

mongoose.connect(process.env.MONGOURI,{
    useNewUrlParser: true ,
    useUnifiedTopology: true
})

mongoose.connection.on('connected',() => {
    console.log("Connected to mongo")
})
mongoose.connection.on('error',(err) => {
    console.log("error to mongo",err)
})


app.use(express.json()) // What is use of this ?
app.use("/",yahooFinanceAPI)
app.use("/",apiSecret)
app.use("/",getAccessToken)



app.listen(port,() => {
    console.log("Server running on the : ",port)
})