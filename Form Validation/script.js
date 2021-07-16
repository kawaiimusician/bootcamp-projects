let theName = document.getElementById("name");
let thePass = document.getElementById("password");
let theButton = document.querySelector("button");
let border = document.querySelector("form");
let theWarning = document.getElementById("warning");

document.querySelector("form").addEventListener("submit", function(event) {
    let errors = [];
    if (theName.value == "") {
        errors.push("Please enter a name");
    }

    if (thePass.value.length <= 6) {
        errors.push("Password must be greater than 6 characters")
    }

    if (errors.length > 0){
        event.preventDefault();
        border.style.border = "red 1px solid";
        theWarning.textContent = errors.join (", ");
        theWarning.style.color = "red";
    }

    // My solution: kinda cluttered.
    // if (theName.value == "" && thePass.value == "") {
    //     theWarning.textContent = "Please enter a name, Password must be greater than 6 characters";
    //     theWarning.style.color = "red";
    //     border.style.border = "solid red 1px";
    //     event.preventDefault();
    // } else if (theName.value == "" && thePass.value.length < 6) {
    //     theWarning.textContent = "Please enter a name, Password must be greater than 6 characters";
    //     theWarning.style.color = "red";
    //     border.style.border = "solid red 1px";
    //     event.preventDefault();
    // } else if (thePass.value.length < 6 || thePass.value == "") {
    //     theWarning.textContent = "Password must be greater than 6 characters"
    //     theWarning.style.color = "red";
    //     border.style.border = "solid red 1px"
    //     event.preventDefault();
    // } else if (theName.value == "") {
    //     theWarning.textContent = "Please enter a name";
    //     theWarning.style.color = "red";
    //     border.style.border = "solid red 1px"
    //     event.preventDefault();
    // }
})
