const router = require('express').Router()
const path = require("path"); 

router.use('/api', require('./workoutRoutes'))

//render html page 
router.get('/exercise', (req, res)=>{
  res.sendFile(path.join(__dirname, '../public/exercise.html'))
});

module.exports = router