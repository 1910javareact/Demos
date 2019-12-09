function getJokeXHR() {
    let httpReq = new XMLHttpRequest()
    let cbFunction = () => {
        if (httpReq.readyState === XMLHttpRequest.DONE) {
            let joke = JSON.parse(httpReq.response).value.joke
            document.getElementById('joke-display').innerText = joke
        }
    }

    httpReq.onreadystatechange = cbFunction
    httpReq.open('GET', 'http://api.icndb.com/jokes/random?limitTo=[nerdy]', true)
    httpReq.send()
}

document.getElementById('new-joke-btn').addEventListener('click', getJokeXHR)

//this time, with the fetch api
async function getJokeFetch() {
    const response = await fetch('http://api.icndb.com/jokes/random?limitTo=[nerdy]')
    let body = await response.json()
    document.getElementById('joke-display').innerText = body.value.joke
}

//one more time with fetch
//this time with .then and .catch
//.then calls the provided callback with the value of the promise, when it completes
function getJokeThen() {
    fetch('http://api.icndb.com/jokes/random?limitTo=[nerdy]').then(
        (response) => {
            response.json().then(
                (resBody) => {
                    document.getElementById('joke-display').innerText = resBody.value.joke
                })
        }).catch((e)=>{
            console.log(e);
        })
}


getJokeFetch()
//getJokeXHR()

