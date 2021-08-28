const casual = require("casual");

let name = casual.name;
let country = casual.country;
let city = casual.city;
let number = casual.phone;
let address = casual.address;
let month = casual.month_name;



let message = `Hello there ${name}! \nHow was your trip to ${country}? \nDid you get to visit ${city}? \nI sure do hope you had a wonderful time. \nIs you phone number still ${number}? \nI will try to give you a call sometime. By the way, I want to send you a fresh loaf of bread at your address of: \n\n${address} \n\nWell I will see you soon. I will be visiting sometime before ${month}. \nUntil then, farewell!`

console.log(message);