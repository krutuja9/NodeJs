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
const db = require('./db')

const Person = require("./models/Person");
const bodyParser = require("body-parser");
app.use(bodyParser.json());

const MenuItem = require("./models/MenuItem");


app.get('/', function (req, res) {
  res.send("Welcome to my hotel....");
})

// Post route to add a MenuItem
app.post("/menuitem", async (req, res) => {
  try {
    const data = req.body;
    const NewMenuItem = new MenuItem(data)
    const response = await NewMenuItem.save()
    res.status(200).json(response)
  }catch(err){
    console.log(err)
    res.status(500).json({error: 'Internal server error'});
  }
})

// get method to get the menuItem
app.get('/menuitem', async (req,res)=>{
  try{
    const data = await MenuItem.find();
    console.log("menuItem Data Fetched")
    res.status(200).json(data)
  }catch(err){
    console.log(err)
    res.status(500).json({error:"Internal server serror"})
  }
})

//POST route to add a person
app.post('/person', async (req, res) => {
  try {
    const data = req.body
    const newPerson = new Person(data)
    // save the new person to the database
    const response = await newPerson.save()
    res.status(201).json(response)
  } catch (err) {
    console.log(err)
    res.status(500).json({ error: 'Internal server error' });
  }


  // const data = req.body; // assuming the request body contains the person data

  // // create a new Person document using the mongoose model
  // const newPerson = new Person(data);

  // // save the new person to the database
  // newPerson.save((error, savedPerson) => {
  //   if(error) {
  //     console.log("Error saving person", error);
  //     res.status(500).json({error:'Internal server error'})
  //   }else{
  //     console.log('data saved successfully')
  //       res.status(200).json(savedPerson);

  //   }
  // })
})

// get method to get the person
app.get('/person', async (req, res) => {
  try {
    const data = await Person.find();
    console.log("data fetched")
    res.status(200).json(data)
  } catch (err) {
    console.log(err)
    res.status(500).json({ error: "Internal server error" })
  }
})


app.listen(3000, () => {
  console.log("listening on port 3000")
});









