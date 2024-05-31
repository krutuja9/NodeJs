const mongoose = require('mongoose')

// define the person schema

const personSchema = new mongoose.Schema({
  name:{
    type: String,
    required: true
  },
  age:{
    type: Number,
  },
  work:{
    type: String,
    enum: ["chef", "waiter", "manager",],
    require: true
  },
})
