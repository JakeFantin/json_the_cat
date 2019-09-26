const request = require('request');


const fetchBreedDescription = function(breed, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`, (error, response, body) => {
    if (error) {
      callback(error, null);
      return;
    } else {
      const data = JSON.parse(body);
      if (data.length) {
        callback(null, data[0].description);
      } else {
        console.log('Breed does not exist... yet. Godspeed.');
        callback('notBreed.exe', null);
      }
    }
  });
};

module.exports = { fetchBreedDescription };