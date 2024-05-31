const mongoose = require('mongoose')
const menuINtemSchema = new mongoose.Schema({
  name:{
    type: String,
    require:true,
  },
  price:{
    type: Number,
    require:true,
  },
  taste:{
    type: String,
    enum:["sweet","spicy","sour"],
    require:true,
  },
  is_drink:{
    type : Boolean,
    default: false,
  },
  ingredients:{
    type: [String],
    defualt:[],

  },
  num_sales:{
    type:Number,
    defualt : 0,
  },


})

const MenuItem = mongoose.model("MenuItem",menuINtemSchema);
module.exports = MenuItem;