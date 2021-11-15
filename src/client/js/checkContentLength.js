function checkContentLength(inputText) {
  let content = document.getElementById('mytext').value;
    console.log("::: Running checkContentLength :::", inputText);
    if(content.length <=1 ) {
        alert("Please enter a sentence.")
    }
}

export { checkContentLength }
