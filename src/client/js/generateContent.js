import { checkContent } from "..";
import {checkContentLength} from '..';

import "core-js/stable";
import "regenerator-runtime/runtime";

document.addEventListener('DOMContentLoaded', function () {
    let button = document.getElementById('generate');
    button.addEventListener('click', generateContent);
});


function generateContent(){
    console.log('clicked');
    let mytext = document.getElementById('mytext').value;
    Client.checkContent(mytext);

    function checkContentLength(inputText) {
          if(mytext.length <=1 ) {
              alert("Please enter a sentence.")
          }
      }
    checkContentLength(mytext)
    if ( mytext !=''){
        postText ('/text', mytext, updateUI);
    }else {
        return "Please enter your text!"
    }
}

const postText = async (url, data, callback) => {
    let base = 'http://localhost:8080'
    console.log(data);
    
    let jbody = {txt:data};
    const response = await fetch(base + url, {
        method:'post',
        credential: 'same-origin',
        headers:{
            'content-type': 'application/json',
        },
        body: JSON.stringify(jbody),
    });
    try {
        const results = await response.json();
        console.log(results);
        callback(results);
       
    } catch(error) {
        console.log('error', error);
    }
}

 function updateUI (data) {
    document.getElementById('agreement').innerHTML = `<p> Agreement:${data.agreement} </P>`;
    document.getElementById('subjectivity').innerHTML = `<p> Subjectivity:${data.subjectivity} </p>`;
    document.getElementById('confidence').innerHTML = `<p> Confidence:${data.confidence} </p>`;
 }

export { generateContent }
