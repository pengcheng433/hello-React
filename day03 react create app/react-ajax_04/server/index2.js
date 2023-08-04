const express = require('express')
const app = express()
const port = 5001

app.get('/test2', (req, res) => {
  res.send('index2.js')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})