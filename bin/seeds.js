// Iteration #1
const mongoose = require('mongoose')
require('../configs/db.configs.js')

let DroneModel =  require('../models/drone.model.js')

DroneModel.insertMany([
        { name: 'Creeper XL 500', propellers: 3, maxSpeed: 12 },
        { name: 'Racer 57', propellers: 4, maxSpeed: 20 },
        { name: 'Courier 3000i', propellers: 6, maxSpeed: 18 }
      ]
)
      .then(()=>{
          console.log('Data seeded')
          mongoose.connection.close()
      })
      .catch(()=>{
          console.log('Data seeding went wrong')
      })