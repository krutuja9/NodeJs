const express = require("express");
const router = express.Router();
const MenuItem = require("./../models/MenuItem");


// Post route to add a MenuItem
router.post("/", async (req, res) => {
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
router.get('/', async (req,res)=>{
  try{
    const data = await MenuItem.find();
    console.log("menuItem Data Fetched")
    res.status(200).json(data)
  }catch(err){
    console.log(err)
    res.status(500).json({error:"Internal server serror"})
  }
})


module.exports = router;