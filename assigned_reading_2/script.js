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


// Exercise #3 : Chessboard

// I had difficulty understanding. I attempted to solve the problem but I couldn't find the answer.

let chess = ""
let size = 8

for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
    if ((i + j) % 2 === 0) {
        chess += " ";
    } else {
        chess += "#";
        }
    }
}

console.log(chess);









