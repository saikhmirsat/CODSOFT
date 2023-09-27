const express = require('express')
const cors = require('cors')
const app = express()
require('dotenv').config()
const { connection } = require('./config/db')
const { UserRoute } = require('./Routes/User.route')
const { Authenticate } = require('./Middleware/Authenticate.middleware')
const { JobApplicationRouter } = require('./Routes/UserJobApplication.route')
const { EmployeeJobPostRouter } = require('./Routes/EmployeeJobPostRoute')
const { JobApplicationStatusRouter } = require('./Routes/JobApplicationStatus.route')

app.use(cors())
app.use(express.json())

app.use('/users', UserRoute)
app.use('/jobs', EmployeeJobPostRouter)
app.use(Authenticate)
app.use('/jobapplications', JobApplicationRouter)
app.use('/jobstatus', JobApplicationStatusRouter)


app.listen(process.env.PORT, async () => {
    try {
        await connection
        console.log("DB is  connected")
    } catch (err) {
        console.log("DB is not connected")
    }
    console.log(`Server running at ${process.env.PORT}`)
})