const express = require('express')
const bodyParser = require("body-parser");

const userRouter = require('./routers/users')


const app = express()
const port = process.env.PORT || 4000

app.get('/', (req, res) => res.send('default route'))

app.use(express.json());
app.use(express.static('public'))
.use('/users', userRouter)

app.listen(port, () => {
  console.log('app is listening on:', port)
})