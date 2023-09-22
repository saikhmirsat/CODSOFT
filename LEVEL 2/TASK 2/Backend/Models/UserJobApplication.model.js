const mongoose = require('mongoose')


const UserJobApplicationSchema = mongoose.Schema({
    user: String,
    resume: String,
    status: Boolean,
    jobdetails: [Object]

}, {
    versionKey: false
})




const UserJobApplicationModel = mongoose.model('userjobapplications', UserJobApplicationSchema)

module.exports = {
    UserJobApplicationModel
}