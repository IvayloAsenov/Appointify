const express = require('express')
const cors = require('cors')
const app = express()
const port = 5000

app.use(cors())

app.get('/api', function (req, res, next) {
  res.json({msg: 'This is CORS-enabled for all origins!'})
})

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))