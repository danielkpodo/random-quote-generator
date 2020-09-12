// Fetch quote from forrismatic
async function getQuote() {
  const proxyUrl = `https://cors-anywhere.herokuapp.com/`;
  const apiUrl = `http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json`;
  try {
    const response = await fetch(proxyUrl + apiUrl);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log("Whoops no quote: " + error);
    getQuote();
  }
}

// load quote
getQuote();
