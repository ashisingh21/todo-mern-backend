const express = require('express');
const cors = require('cors');
const { mongoDbConnect } = require('./db/db')
const colors = require('colors')
require('dotenv').config()
// const transactionRoute = require('./routes/transactions')

const taskRoute = require('./routes/task')
const categoryRoute = require('./routes/category')

const app = express()


mongoDbConnect()
const PORT = process.env.PORT || 8080;


// middlewares
app.use(express.json())
app.use(cors())

// routes

app.use('/api/task', taskRoute)
app.use('/api/category', categoryRoute)



const server = () => {
    app.listen(PORT, () => {
        console.log(`successfully! connected on port ${PORT}`.bgBrightGreen)
    })
}

server()

