const express = require('express')
const { connection } = require('./config/db')
require('dotenv').config()
const cors = require('cors')
const app = express()

app.use(cors())
app.use(express.json())


app.listen(process.env.PORT, async () => {
    try {
        await connection
        console.log("DB is  connected")
    } catch (err) {
        console.log("DB is not connected")
    }
    console.log(`Server running at ${process.env.PORT}`)
})