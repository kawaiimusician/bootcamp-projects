function greeting(){
    const theName = prompt("Tell me your name.");
    const greet = `<p>You are going to have a wonderful day, ${theName}.</p>`;
    return greet
}

function numbers(){
    let number1 = prompt("Give me a number.");
    let number2 = prompt("Give me another number.");
    number1 = Number(number1);
    number2 = Number(number2);
    const sumOfNumb = number1 + number2;
    return sumOfNumb
}

greetFinish = greeting();
number = numbers()
numbFinish = `By the way, the sum of your numbers is ${number}`;

if (isNaN(number)) {
    document.write("Please reload and try again with a real number.")
} else {
    document.write(greetFinish);
    document.write(numbFinish);
}