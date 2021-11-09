var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')


const dotenv = require('dotenv');
dotenv.config();


var textapi = new meaningCloud({
    application_key: process.env.API_KEY
});

const app = express()

const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.use(express.static('dist'))

console.log(__dirname)

// setup server
app.listen(8080, function () {
    console.log('Example app listening on port 8080!')
})

let textData ={};

app.post('/text', function(req,res) {
    textData = req.body;
    return res.send(textData);
})

app.get('/all', function (req, res) {
    return res.send(textData);
   // return res.sendFile(path.resolve('src/client/views/index.html'))
})
