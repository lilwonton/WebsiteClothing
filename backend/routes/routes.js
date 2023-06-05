const express = require('express')
const router = express.Router()
const ClothingSchema = require('../models/clothing.js')
const UserModel = require('../models/user.js')

router.get('/', (req, res) => {
  ClothingSchema.find(req.query)
  //'then' happens if find is succesful
  .then(items => {
    console.log("succesfully got entire db!")
    console.log(items)
    res.json(items)
  })
  //if theres an error, 'catch' happens instead
  .catch(err => {
    console.error(err)
    res.json(err)
  })
})

//for this get request, just insert an id in order to find the id in the database
router.get('/:id', (req, res) => {
    ClothingSchema.findById(req.params.id)
    .then(ClothingModel => {
      console.log("succesfully got one!")
      console.log(ClothingModel)
      res.json(ClothingModel)
    })
    .catch(err => {
//helps catch errors if code doesnt run properly
      console.error(err)
      res.json(err)
    })
})

//helps find the name of a customer
router.get('/user/:name', (req, res) => {
  ClothingSchema.find({name: req.params.name})
  .then(ClothingModel => {
    console.log("succesfully got one!")
    console.log(ClothingModel)
    res.json(ClothingModel)
  })
  .catch(err => {
    console.error(err)
      res.json(err)
  })
})

//helps find the email of a customer
router.get('/user/:email', (req, res) => {
  ClothingSchema.find({email: req.params.email})
  .then(ClothingModel => {
    console.log("succesfully got one!")
    console.log(ClothingModel)
    res.json(ClothingModel)
  })
  .catch(err => {
    console.error(err)
      res.json(err)
  })
})


//create something in the database by doing '/add'
router.post('/add', (req, res) => {
  ClothingSchema.create(req.body)
  .then(ClothingModel => {
    console.log("succesfully got one!")
    console.log(ClothingModel)
    res.send(ClothingModel)
  })
  .catch(err => {
    console.error(err)
      res.json(err)
  })
})

//update a value in the database by doing put and then /:id
router.put('/:id', (req, res) => {
    ClothingSchema.findByIdAndUpdate(req.params.id, req.body)
    .then(updated =>{
      res.send(updated)
    })
    .catch(err =>{
      console.error(err)
      res.json(err)
    })
})

router.delete('/:', (req, res) => {
  ClothingSchema.deleteMany({ color: 'red' })
    .then(() => {
      console.log('successfully deleted all red clothes')
      res.status(204).send()
    })
    .catch((err) => {
      console.error(err)
      res.status(500).send(err)
    })
})

router.delete('/:id', (req, res) => {
  ClothingSchema.findByIdAndDelete(req.params.id)
  .then(deleted => {
    res.send(deleted)
  })
  .catch(err => {
    res.json(err)
  })
})

module.exports = router