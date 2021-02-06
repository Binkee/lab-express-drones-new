const express = require('express');

// require the Drone model here

const router = express.Router();
const DroneModel = require('../models/drone.model.js')

router.get('/drones', (req, res, next) => {
  // Iteration #2: List the drones
 DroneModel.find()
    .then((drone)=>{
        res.render('drones/list.hbs', {drone})
    })
    .catch(()=>{
      console.log('Something went wrong while finding')
    })
});

router.get('/drones/create', (req, res, next) => {
  DroneModel.create()
  .then((drone)=>{
    res.render('drones/create-form.hbs', {drone})
  })
  .catch(()=>{
    console.log('Something went wrong while finding')
  })
});

router.post('/drones/create', (req, res, next) => {
  const {myDrone, myPropellers, myMaxSpeed} = req.body
  let myNewDrone = {
    name: myDrone,
    propellers: myPropellers,
    maxSpeed: myMaxSpeed
  }
  DroneModel.create(myNewDrone)
  .then(()=>{
    res.redirect('/drones')
  })
  .catch(()=>{
    console.log('Something went wrong while finding')
  })
});

router.get('/drones/:id/edit', (req, res, next) => {
  let id = req.params.id
  DroneModel.findById(id)
  .then((drone)=>{
    res.render('drones/update-form.hbs', {drone})
  })
  .catch(()=>{
    console.log('Something went wrong while finding')
  })
});

router.post('/drones/:id/edit', (req, res, next) => {
  let id = req.params.id
  const {myDrone, myPropellers, myMaxSpeed} = req.body

  let editedDrone = {
    name: myDrone,
    propellers: myPropellers,
    maxSpeed: myMaxSpeed
  }

  DroneModel.findByIdAndUpdate(id, editedDrone)
  .then(()=>{
    res.redirect('/drones')
  })
  .catch(()=>{
    console.log('Edit failed')
  })
});

router.post('/drones/:id/delete', (req, res, next) => {
  let id = req.params.id
  DroneModel.findByIdAndDelete(id)
      .then(() => {

          res.redirect('/drones')
      })
      .catch(() => {
          console.log('Delete failed!')
      })
})

module.exports = router;
