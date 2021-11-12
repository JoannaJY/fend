const dotenv = require('dotenv');
dotenv.config({path:'../../.env'});

const { exit } = require('process');
var path = require('path');
var FormData = require('form-data');
const express = require('express');
const mockAPIResponse = require('./mockAPI.js')
const app = express();
// Cors for cross origin allowance
const cors = require('cors');
const axios = require('axios');
app.use(cors());

const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.use(express.static('dist'))




console.log(`Your API key is ${process.env.API_KEY}`);


// setup server
app.listen(8080, function () {
    console.log('Example app listening on port 8080!')
})


const baseUrl = "https://api.meaningcloud.com/sentiment-2.1";

let textapi = process.env.API_KEY;
console.log(textapi);




const postAPIText = async(data,callback) => {
    let body = {
        "key":textapi,
        "txt":data.txt,
        "lang":'en'
    }

    axios.post(baseUrl,body)
    .then((response) => {
        console.log(response);
        let results = {
            "agreement": response.data.agreement,
            "confidence": response.data.confidence,
            "subjectivity": response.data.subjectivity
        }
   
        callback(results);
      }, (error) => {
        console.log(error);
      });
}


app.post('/text', function(req,res) {
    let textData = req.body;
    postAPIText(textData, function(data){
        console.log(data);
        res.send(data);
    });

})

