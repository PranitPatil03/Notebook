const connectToDadatabase = require('./db')
const express = require('express')
var cors = require('cors')

connectToDadatabase()

const app = express()
app.use(cors())

const port = 8000

app.use(express.json())

app.use('/api/auth', require('./routes/auth'))
app.use('/api/notes', require('./routes/notes'))

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

