const express = require('express')

const { UserJobApplicationModel } = require('../Models/UserJobApplication.model')

const JobApplicationRouter = express.Router()

JobApplicationRouter.get('/', async (req, res) => {
    try {
        const data = await UserJobApplicationModel.find()
        res.send(data)
    } catch (err) {
        console.log(err)
    }
})
JobApplicationRouter.get('/:user', async (req, res) => {
    try {
        const { user } = req.params
        const data = await UserJobApplicationModel.find({ user })

        res.send(data)

    } catch (err) {
        res.send({ "msg": "Not get user request", "sucess": false })
        console.log(err)
    }
})

JobApplicationRouter.post('/apply', async (req, res) => {
    try {
        const NewJob = new UserJobApplicationModel(req.body)
        await NewJob.save()

        res.send({ "msg": "New job application submited succesfully", "success": true })
    } catch (err) {
        console.log(err)
    }
})



module.exports = {
    JobApplicationRouter
}