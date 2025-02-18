const express = require('express')
const app = express()
const port = 3000

const connect = require('./connect/connect')

// // app.use(cors());
app.use(express.json());
// app.use(bodyparser.json({ limit: "30mb", extended: true }));
// app.use(bodyparser.urlencoded({ limit: "30mb", extended: true }));
connect();
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {})

app.use('/api/article', require('./routes/article') )
