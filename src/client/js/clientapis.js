
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

export { postText }
