import { checkForName } from './js/nameChecker'
import { handleSubmit } from './js/formHandler'
import './styles/resets.scss'
import './styles/base.scss'
import './styles/footer.scss'
import './styles/form.scss'
import './styles/header.scss'

console.log(checkForName);

const baseUrl = "https://api.meaningcloud.com/sentiment-2.1";

document.getElementById('generate').addEventListener('click',generateContent);

const formdata = new FormData();
formdata.append("key", process.env.API_KEY);
formdata.append("txt", "YOUR TEXT HERE");
formdata.append("lang", en);  // 2-letter code, like en es fr ...

const requestOptions = {
  method: 'POST',
  body: formdata,
  redirect: 'follow'
};

const response = fetch(baseUrl, requestOptions)
  .then(response => ({
    status: response.status, 
    body: response.json()
  }))
  .then(({ status, body }) => console.log(status, body))
  .catch(error => console.log('error', error));


