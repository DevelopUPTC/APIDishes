const mongoose = require('mongoose')

const {Schema} = mongoose

const DishSchema = new Schema({
  idDish : {
    type : String,
    required : true,
    unique : true
  },
  name : {
    type : String,
    required : true
  },
  calories : {
    type : Number,
    required : true,
    min : 50
  },
  isVegetarian : {
    type : Boolean,
    required : true
  },
  value :{
    type : Number,
    required : true
  },
  comments :{
    type : String,
    required: false
  }
})



module.exports = mongoose.model('dish',DishSchema)