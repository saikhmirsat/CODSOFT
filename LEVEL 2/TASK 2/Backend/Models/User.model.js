const mongoose = require('mongoose')

const UserSchema = mongoose.Schema({
    name: String,
    email: String,
    password: String,
    mobile: Number,
    role: String,
    register_date: Date
}, {
    versionKey: false
})

const UserModel = mongoose.model('users', UserSchema)

module.exports = {
    UserModel
}