const request = require('request');
const args = process.argv.slice(2);
const breed = args[0];
const url = `https://api.thecatapi.com/v1/breeds/search?q=${breed}`;
request(url, (error, response, body) => {
  if (error) {
    console.log(error);
  }
  
  const data = JSON.parse(body);
  if (JSON.stringify(data) === '[]') {
    console.log("Breed not Found");
  } else {
    console.log(data[0].description);
  }

});