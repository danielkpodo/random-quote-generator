const quoteContainer = document.getElementById("quote-container");
const quoteText = document.getElementById("quote");
const authorText = document.getElementById("author");
const twitterBtn = document.getElementById("twitter");
const newQuote = document.getElementById("new-quote");

// Fetch quote from forrismatic
async function getQuote() {
  const proxyUrl = "https://cors-anywhere.herokuapp.com/";
  const apiUrl =
    "http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json";
  try {
    const response = await fetch(proxyUrl + apiUrl);
    const data = await response.json();
    console.log(data);
    data.quoteAuthor !== ""
      ? (authorText.innerText = data.quoteAuthor)
      : (authorText.innerText = data.quoteAuthor);

    quoteText.innerText = data.quoteText;
  } catch (error) {
    getQuote();
  }
}

getQuote();
