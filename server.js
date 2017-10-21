
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const mongoose = require('mongoose')


mongoose.connect('mongodb://admin:admin@ds125565.mlab.com:25565/hackativcash',{
    useMongoClient: true
})

mongoose.Promise = global.Promise

app.use(bodyParser.json())
const product = require( './controllers/product.js')(app)



app.get('/',(Request,Response) =>{
    Response.send('OK')
})

app.listen(3000,()=>{
    console.log('Server is listening.....')
})