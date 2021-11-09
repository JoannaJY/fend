import { checkForName } from './js/nameChecker'
import { handleSubmit } from './js/formHandler'
console.log('hello');
import './styles/resets.scss'
import './styles/base.scss'
import './styles/footer.scss'
import './styles/form.scss'
import './styles/header.scss'



const baseUrl = "https://api.meaningcloud.com/sentiment-2.1";

const formdata = new FormData();
formdata.append("key", process.env.API_KEY);
formdata.append("txt", document.getElementById('mytext').value);
formdata.append("lang", en); 



document.getElementById('generate').addEventListener('click',generateContent);

function generateContent(){
    console.log('clicked');
    if (document.getElementById('mytext').value !=''){
        getContent (baseUrl, sentimentData)
    }else {
        return "Please enter your text!"
    }
}

function sentimentData (data) {
    console.log('sentiment data entered');
    let sentimentContent = {
        agreement: data.agreement,
        subjectivity: data.subjectivity,
        confidence: data.confidence
    }
    postText('/text', sentimentContent)
   .then(updateUI());
}


const updateUI = async () => {
    console.log('updateUI')
    let base = 'http://localhost:8080'
    const request = await fetch(base+'/all');
    try{
        const allData = await request.json();
        console.log(allData);
        document.getElementById('agreement').innerHTML = `<p> ${allData.agreement} </P>`;
        document.getElementById('subjectivity').innerHTML = `<p> ${allData.subjectivity} </p>`;
        document.getElementById('confidence').innerHTML = `<p> ${allData.confidence} </p>`;
        
    }catch (error){
        console.log('error', error)
    }
}


const postText = async (url, data) => {
    let base = 'http://localhost:8080'
    const response = await fetch(base + url, {
        method:'post',
        credential: 'same-origin',
        headers:{
            'content-type': 'application/json',
        },
        body: formdata,
        redirect: 'follow'
    });
    try {
        const data = await response.json();
        return data
    } catch(error) {
        console.log('error', error);
    }
}

const  getContent = async (url='', data) => {
    console.log('get content '+url);
    const request = await fetch(url);
    try {
        const allData = await request.json()
        console.log(allData);
        data(allData);
    } catch (error){
        console.log('error',error)
    }
}



