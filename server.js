const express = require('express')
const { join } = require('path')

app.use(express.static(join(__dirname, 'public')))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

require('./db')
  .then(() => app.listen(process.env.PORT || 3000))
  .catch(err => console.log(err))