const mongoose = require('mongoose')


const UserJobApplicationSchema = mongoose.Schema({
    user: String,
    status: Boolean,
    jobData: Object

}, {
    versionKey: false
})




const UserJobApplicationModel = mongoose.model('userjobapplications', UserJobApplicationSchema)

module.exports = {
    UserJobApplicationModel
}