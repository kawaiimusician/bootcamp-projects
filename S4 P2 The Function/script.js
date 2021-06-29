function greeting(){
    var theName = prompt("Tell me your name.");
    var greet = `<p>You are going to have a wonderful day, ${theName}.</p>`;
    return greet
}

function numbers(){
    var number1 = prompt("Give me a number.");
    var number2 = prompt("Give me another number.");
    var number1 = Number(number1);
    var number2 = Number(number2);
    var sumOfNumb = number1 + number2;
    numberCombo = `<p>By the way, the sum of your numbers is ${sumOfNumb}.</p>`;
    return numberCombo
}

document.write(greeting());
document.write(numbers());