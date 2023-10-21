const request = require('request');
const url = "https://api.thecatapi.com/v1/breeds/search?q=Siberian";
request(url, (error, response, body) => {
  if (error) {
    console.log(error);
  }
  console.log(typeof(body));

});