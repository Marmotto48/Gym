const mongoose=require('mongoose')

const reservationsSchema= new mongoose.Schema({
    Date : {type : Date , required :true},
    Type : {type : String, required : true}
})

module.exports = mongoose.model('Reservation', reservationsSchema)