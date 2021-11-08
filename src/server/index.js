var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')


const dotenv = require('dotenv');
dotenv.config();

const app = express()

const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const cors = require('cors');
app.use(cors());

app.use(express.static('dist'))

console.log(__dirname)

//call meaning cloud API
var textapi = new meaningCloud({
    application_key: process.env.API_KEY
  });
// setup server
app.listen(8080, function () {
    console.log('Example app listening on port 8080!')
})

let textdata ={};

app.post('/', function(req,res) {
    textData = req.body;
    return res.send(textData);
})

app.get('/', function (req, res) {
    return res.send(textData);
   // return res.sendFile(path.resolve('src/client/views/index.html'))
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})
