const mongoose = require('mongoose')

const sessionsSchema = new mongoose.Schema({
    Date : {type : Date , required :true},
    Type : {type : String, required : true}
})

module.exports = mongoose.model('Session', sessionsSchema)