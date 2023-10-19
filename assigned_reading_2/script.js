// Exercise #1 : Looping A Triangle

for (let number = '#'; number.length <= 7; number = number + '#') {
    console.log(number);
  }




// Exercise #2 : FizzBuzz

for (let number = 0; number <= 100; number = number + 1) {
  if (number % 3 != 0 && number % 5 != 0) {
    console.log(number);
  }
  if (number % 3 === 0 && number % 5 === 0) {
    console.log('FizzBuzz');
  }
  else if (number % 3 === 0) {
    console.log('Fizz');
  }
  else if (number % 5 === 0) {
    console.log('Buzz');
  }
}




