// console.log("server file is running ")

// function add (a,b){
//   return a + b
// }

// let result = add(2,3)
// console.log(result)

// let result2 = add(7,3)
// console.log(result2)

// let add = (a,b) =>{
//   return a+b
// }
// let result = add(1,2)
// console.log(result)


// function callBack (a,b){
// console.log("new adding is done")
// }

// const add = function(a,b, callBack){
//   let result = a+b;
//   console.log("result: " +result)
//   callBack()
// }

// add(3,4,callBack)



// const os = require("os");
// const fs = require("fs");

// let user = os.userInfo();
// console.log(user);
// console.log(user.username);

// fs.appendFile("hellogreet.txt","hi "+user.username +" !\n", ()=>{
//   console.log("file created");
// })


// const notes = require('./notes')
// let age = notes.age
// // console.log(age)

// let result =  notes.addNumber(age+2, age+1)
// console.log(result)
// console.log("hello rutuja")

// const jsonString = `{"name":"rutuja", "city":"Nashik", "age":23}`
// const jsonObject = JSON.parse(jsonString)
// console.log(jsonObject.name)

// const jsonObj = {name:"rutujakokate", age:24}
// const jsonStr = JSON.stringify(jsonObject)
// console.log(jsonStr)




// Express

const express = require("express");
const app = express();
const db =require('./db')
app.get('/', function(req, res) {
  res.send("hello world")
})


app.listen (3000,()=>{
  console.log("listening on port 3000")
});









