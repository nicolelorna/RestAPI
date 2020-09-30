const express = require('express')
const app = express() 
const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost', { useNewUrlParser: true})
const db = mongoose.connection
db.on('error',(error) => console.error(error))

app.use(express.json()) 


app.listen(3000, () => console.log('Server Started'))