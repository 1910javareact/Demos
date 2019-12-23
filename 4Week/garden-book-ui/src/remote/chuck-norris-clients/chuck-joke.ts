
//This api call hits chucknorrisdb random joke with a filter of nerdy
//it returns just the joke from the response
export async function CNDBGetJoke(): Promise<string> {
    const response = await fetch('http://api.icndb.com/jokes/random?limitTo=[nerdy]');
    const body = await response.json();
    return body.value.joke;
}

