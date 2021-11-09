import { checkForName } from './js/nameChecker'
import { handleSubmit } from './js/formHandler'
console.log('hello' + checkForName);
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
   
}

const postText = async (url, formdata) => {
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

const  getContent = async (url='',data) => {
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



const response = fetch(baseUrl, requestOptions)
  .then(response => ({
    status: response.status, 
    body: response.json()
  }))
  .then(({ status, body }) => console.log(status, body))
  .catch(error => console.log('error', error));


