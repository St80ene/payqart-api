require('dotenv').config();
const bodyParser = require('body-parser');
const cors = require('cors');

const route = require('./route')
const express = require('express');
const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use(route);


const port = process.env.PORT;




console.log(`Starting App...`);
app.listen(port, () => console.log(`App listening on ${port}...`));
