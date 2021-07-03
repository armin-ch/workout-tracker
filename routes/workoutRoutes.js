const router = require('express').Router()
const { Workout } = require('../models')

router.get('/workouts', (req, res) => {
  Workout.find()
  .then(data => res.json(data))
  .catch(err => console.log(err))
})


module.exports = router