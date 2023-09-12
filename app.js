console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

function printOdds(count) {
    for ( var i = 1; i <= 100; i++ ) {
       if (i % 2 == 1 && i == count){
       console.log(i);
}
    
}
}

printOdds(5);

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

function checkAge(userName, age){
    const aboveSixteen = `Congrats ${userName}, you can drive!`;
    const belowSixteen = `Sorry ${userName}, but you need to wait until you're 16.`;

    if (age >= 16) {
        console.log(aboveSixteen);
    } else {
        console.log(belowSixteen);
    }
}

checkAge("John", 14);

// Exercise 3 Section
console.log("EXERCISE 3:\n==========\n");








