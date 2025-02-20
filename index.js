const express = require('express')
const bodyparser = require('body-parser')
const app = express()
const port = 3000

const connect = require('./connect/connect')

connect();



// // app.use(cors());
app.use(express.json());
app.use(bodyparser.json({ extended: true }));
app.use(bodyparser.urlencoded({ extended: true }));

app.use('/api/article', require('./routes/article') )

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {})


