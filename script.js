// Get quote
async function getQuote() {
  const apiUrl =
    "http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json";
  try {
    const response = await fetch(apiUrl);
    const data = response.json();
    console.log(data);
  } catch (error) {
    console.log("Whoops no quote: " + error);
  }
}

// load quote
getQuote();
