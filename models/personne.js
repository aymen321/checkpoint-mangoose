const mongoose = require ('mongoose')


const personneSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    age: Number,

    favoriteFoods: Array
})
const model = mongoose.model('personne',personneSchema)
module.exports = model