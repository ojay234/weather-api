const request = require("request");

const url =
  "http://api.weatherstack.com/current?access_key=41df0b88e0a5ccccb602bc4987d9ceb8&query=37.8267,-122.4233";

request({ url: url }, (error, response) => {
  const data = JSON.parse(response.body);
  console.log(data.current);
});
