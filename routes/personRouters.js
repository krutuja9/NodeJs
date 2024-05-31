const express = require("express");
const router = express.Router();
const Person = require("./../models/Person");

// POST route to add a person
router.post('/', async (req, res) => {
  try {
    const data = req.body;
    const newPerson = new Person(data);
    const response = await newPerson.save();
    res.status(201).json(response);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// GET method to get all persons
router.get('/', async (req, res) => {
  try {
    const data = await Person.find();
    console.log("data fetched");
    res.status(200).json(data);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal server error" });
  }
});

// GET method to get persons by work type
router.get('/:workType', async (req, res) => {
  try {
    const workType = req.params.workType;
    if (workType === 'chef' || workType === 'manager' || workType === 'waiter') {
      const response = await Person.find({ work: workType });
      console.log("response fetched");
      res.status(200).json(response);
    } else {
      res.status(400).json({ error: 'Invalid work type' });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal server error" });
  }
});

// PUT method to update a person by ID
router.put('/:id', async (req, res) => {
  try {
    const personId = req.params.id;
    const updatePersonData = req.body;
    const response = await Person.findByIdAndUpdate(personId, updatePersonData, {
      new: true, // return the updated document
      runValidators: true,
    });
    if (!response) {
      return res.status(404).json({ error: 'Person not found' });
    }
    console.log("data updated");
    res.status(200).json(response);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;
