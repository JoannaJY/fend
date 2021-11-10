var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
const app = express()

const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.use(express.static('dist'))


const dotenv = require('dotenv');
dotenv.config();

const baseUrl = "https://api.meaningcloud.com/sentiment-2.1";
var textapi = new meaningCloud({
    application_key: process.env.API_KEY
});


const formdata = new FormData();
formdata.append("key", textapi);
formdata.append("txt", document.getElementById('mytext').value);
formdata.append("lang", en); 


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
