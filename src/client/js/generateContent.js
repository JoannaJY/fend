import { checkContent } from "..";
import {postText} from '..';
import {checkContentLength} from '..';

document.getElementById('generate').addEventListener('click',generateContent);


function generateContent(){
    console.log('clicked');
    let mytext = document.getElementById('mytext').value;
    Client.checkContent(mytext);
    Client.checkContentLength(mytext);
    if ( mytext !=''){
        postText ('/text', mytext, updateUI);
    }else {
        return "Please enter your text!"
    }
}

 function updateUI (data) {
    document.getElementById('agreement').innerHTML = `<p> Agreement:${data.agreement} </P>`;
    document.getElementById('subjectivity').innerHTML = `<p> Subjectivity:${data.subjectivity} </p>`;
    document.getElementById('confidence').innerHTML = `<p> Confidence:${data.confidence} </p>`;
 }

export { generateContent }
