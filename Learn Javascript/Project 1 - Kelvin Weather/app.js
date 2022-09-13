/*Forecast today is 293 Kelvin. Value saved to kelvin will stay constant*/
const kelvin = 293;
/*Celsius is similar to Kelvin but 273 degrees less than Kelvin. Convert Kelvin to celsius*/
const celsius = kelvin - 273;
//Trying to calculate Fahrenheit
let newton = celsius * (33/100);
//Using Math.floor to round down for Fahrenheit
newton = Math.floor(newton);
console.log(`The temperature is ${newton} degrees Newton`);
