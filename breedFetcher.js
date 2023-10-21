const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;
  request(url, (error, response, body) => {
    if (error) {
      callback(error, null);
      return;
    }
    if (response && response.statusCode > 400) {
      callback(`There was a request Error: ${response.statusCode}`, null);
      return;
    }
    const data = JSON.parse(body);
    if (JSON.stringify(data) === '[]') {
      callback("Breed not Found", null);
      return;
    } else {
      callback(null, data[0].description);
      return;
    }
  });
};

module.exports = { fetchBreedDescription };