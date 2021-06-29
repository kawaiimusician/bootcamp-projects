function greeting(){
    var name = prompt("What is your name?")
    var snack = prompt("What is your favorite snack?")
    var drink = prompt("What is your favorite drink?")
    var greet = `Hi there ${name}, it seems like you enjoy eating ${snack} and drinking ${drink}!`
    return greet
}

document.write(greeting())