const express = require('express')

const { EmployeeJobPostModel } = require('../Models/EmployeeJobPost.model')

const EmployeeJobPostRouter = express.Router()

EmployeeJobPostRouter.get('/', async (req, res) => {
    try {
        const data = await EmployeeJobPostModel.find()
        res.send(data)
    } catch (err) {
        console.log(err)
    }
})
EmployeeJobPostRouter.get('/:_id', async (req, res) => {
    const { _id } = req.params;
    try {
        const data = await EmployeeJobPostModel.findOne({ _id }); // Use findOne to query by _id
        if (data) {
            res.send(data);
        } else {
            res.status(404).json({ message: 'Job post not found' });
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Internal server error' });
    }
});

EmployeeJobPostRouter.get('/:user', async (req, res) => {
    try {
        const { user } = req.params
        const data = await EmployeeJobPostModel.find({ user })

        res.send(data)
    } catch (err) {
        res.send({ "msg": "Not get user request", "sucess": false })
        console.log(err)
    }
})

EmployeeJobPostRouter.post('/post', async (req, res) => {
    try {
        const Job = new EmployeeJobPostModel(req.body)
        await Job.save()

        res.send({ "msg": "New job application submited succesfully", "success": true })
    } catch (err) {
        console.log(err)
    }
})



module.exports = {
    EmployeeJobPostRouter
}