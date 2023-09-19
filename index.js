const express = require('express')
const userRouter = require('./routers/users')


const app = express();
const port = process.env.PORT || 4000;

app.get('/', (req, res) => res.send('default route'));

app.use(express.json());
app.use(express.static('public'));
app.use('/users', userRouter);
app.all('*', function (req, res) {
  res.send(`We're sorry, your call cannot be completed as dialed.`, 404);
})


app.listen(port, () => {
  console.log('app is listening on:', port)
});

