const mongoose = require("mongoose")

// Define the MongoDb connection URL

const mongoUrl = 'mongodb://127.0.0.1:27017/hotels'

// set up mongodb connection
mongoose.connect(mongoUrl,{
  useNewUrlParser: true,
  useUnifiedTopology: true
})
// mongoose maintains a defult connection object representing the mongo connection
const db =mongoose.connection;

// define event listenr for db connection
db.on('connected',()=>{
  console.log("connected to mongodb server")
})
db.on('error',()=>{
  console.error("MongoDb connection error");
})
db.on("disconnected",()=>{
  console.log("MongoDb disconnected")
})

// export the database connection
module.exports = db //db is represitng mongodb connection


