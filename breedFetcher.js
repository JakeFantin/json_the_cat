const request = require('request');
const args = process.argv.slice(2);

request(`https://api.thecatapi.co/m/v1/breeds/search?q=${args[0]}`, (error, response, body) => {
  if (error) {
    console.error(`Ruh-roh raggy (oh wait this is a cat site..) uh, request failed-nyan. Try something not wrong-nyan.`);
    return;
  }
  const data = JSON.parse(body);
  if (data.length) {
    console.log(data[0]);
  } else {
    console.log('Breed does not exist... yet. Godspeed.');
  }
});