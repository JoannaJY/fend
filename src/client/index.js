import { checkForName } from './js/nameChecker'
import { handleSubmit } from './js/formHandler'
console.log('hello');
import './styles/resets.scss'
import './styles/base.scss'
import './styles/footer.scss'
import './styles/form.scss'
import './styles/header.scss'

console.log('11111');

document.getElementById('generate').addEventListener('click',generateContent);


function generateContent(){
    console.log('clicked');
    let mytext = document.getElementById('mytext').value;
    if ( mytext !=''){
        postText ('/text', mytext)
        // .then(getContent('/all',data))
    }else {
        return "Please enter your text!"
    }
}


const postText = async (url, data) => {
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
        const data = await response.json();
        console.log(data);
        document.getElementById('agreement').innerHTML = `<p> Agreement:${data.agreement} </P>`;
        document.getElementById('subjectivity').innerHTML = `<p> Subjectivity:${data.subjectivity} </p>`;
        document.getElementById('confidence').innerHTML = `<p> Confidence:${data.confidence} </p>`;
    } catch(error) {
        console.log('error', error);
    }
}




