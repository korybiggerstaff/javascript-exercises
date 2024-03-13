const convertToCelsius = function(fTemp) {
return Math.floor(((fTemp - 32) * (5 / 9)) * 10) / 10;
};

const convertToFahrenheit = function(cTemp) {
return Math.floor (((cTemp * 1.8) + 32) * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
