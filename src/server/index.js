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



console.log(__dirname)



const postAPIText = async (data) => {
    const formdata = new FormData();
    formdata.append("key", textapi);
    formdata.append("txt", data.txt);
    formdata.append("lang", "en"); 

    console.log(formdata);
    axios({
        method:'post',
        url: baseUrl,
        credential: 'same-origin',
        headers:{
            'content-type': 'application/json',
        },
        body: formdata,
        redirect: 'follow'
    })
    .then((response)=> {
        console.log(response);
    }, (error)=> {
        console.log(error);
    });
}
// postAPIText(baseUrl, data);

const  getAPIContent = async (url, data) => {
    console.log('get content '+url);
    const request = await fetch(url);
    try {
        const allData = await request.json()
        console.log(allData);
        return allData
    } catch (error){
        console.log('error',error)
    }
}

// getAPIContent(baseUrl, textData);

app.post('/text', function(req,res) {
    let textData = req.body;
    console.log(textData);
    postAPIText(textData);
    return res.send(textData);
})

app.get('/all', function (req, res) {
    return res.send(textData);
   // return res.sendFile(path.resolve('src/client/views/index.html'))
})
