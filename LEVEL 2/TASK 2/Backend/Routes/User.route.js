const express = require('express')
const { UserModel } = require('../Models/User.model')
const jwt = require("jsonwebtoken")
const bcrypt = require('bcrypt');


const UserRoute = express.Router()

UserRoute.get('/', async (req, res) => {
    const data = await UserModel.find()
    res.send(data)
    console.log('welcome')
})

UserRoute.post('/register', async (req, res) => {
    const { name, email, password, role, mobile } = req.body
    try {
        const user = await UserModel.find({ email })
        if (user.length > 0) {
            res.send({ "msg": "Already have an account please login" })
        } else {
            bcrypt.hash(password, 9, async (err, hash) => {
                if (err) {
                    res.send("Something went wrong")
                } else {
                    const user = new UserModel({ name, email, password: hash, role, mobile })
                    await user.save()
                    res.send({ "msg": "new user has been register", "success": true })
                }
            });
        }
    } catch (err) {
        console.log(err)
        res.send({ "msg": "Can't register", "success": false })
    }
})

UserRoute.post('/login', async (req, res) => {
    const { email, password } = req.body
    try {
        const user = await UserModel.find({ email })
        if (user.length > 0) {
            bcrypt.compare(password, user[0].password, (err, result) => {
                if (result) {
                    const token = jwt.sign({ userID: user[0]._id }, "caloriecalculator")
                    res.send({ "msg": "Login sucessful", "success": true, token, user })
                } else {
                    res.send({ "msg": "Wrong crediential", "success": false })
                }
            });
        } else {
            res.send({ "msg": "Wrong crediential", "success": false })
        }
    } catch (err) {
        res.send({ "msg": "Something Wrong", "success": false })
    }
})

module.exports = {
    UserRoute
}