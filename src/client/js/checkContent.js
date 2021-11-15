function checkContent(inputText) {

    console.log('hello')
    console.log("::: Running checkContent :::", inputText);
    let content = [
        "AGREEMENT",
        "100",
        "OBJECTIVE"
    ]
    if(content.includes(inputText)) {
        alert("Enter again!")
    }
}

export { checkContent }
