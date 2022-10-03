let message = 'Hello World';

message = 'Goodbye';

const something = 'Ooga Booga';

// something = 'Pew Pew';

console.log(something);

let timeOfDay = document.getElementById('timeOfDay');
let today = new Date();
let hourNow = today.getHours();

let greeting = 'day'; // Undefined 

if (hourNow > 0) {
  greeting = 'Good Morning';
}

if (hourNow > 12) {
  greeting = 'Good Afternoon';
}

if (hourNow > 18) {
  greeting = 'Good Evening';
}

timeOfDay.innerHTML = greeting;