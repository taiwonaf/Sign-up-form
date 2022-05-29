const firstName = document.getElementById("name");
const lastName = document.getElementById("last-name");
const email = document.getElementById("email");
const password = document.getElementById("password");
const submitBtn = document.getElementById("submit-btn");
const form = document.getElementById("form");

form.addEventListener('submit', e => {
    e.preventDefault();

    checkInputs()
})

function checkInputs() {
    const firstNameValue = firstName.value.trim();
    const lastNameValue = lastName.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (firstNameValue === "" || firstNameValue === null) {
        setError(firstName, "First Name cannot be empty");
    } else {
        setSuccess(firstName)
    }

    if (lastNameValue === "" || lastNameValue === null) {
        setError(lastName, "Last Name cannot be empty");
    } else {
        setSuccess(lastName)
    }

    if (emailValue === "" || emailValue === null) {
        setError(email, "Looks like that is not an email");
    } else {
        setSuccess(email)
    }

    if (passwordValue === "" || passwordValue === null) {
        setError(password, "Password cannot be empty");
    } else {
        setSuccess(password);
    }
}

function setError(input, message) {
    const formControl = input.parentElement;
    const errorMessage = formControl.querySelector(".error")
    formControl.classList.add("active");
    errorMessage.innerText = message;
}

function setSuccess(input) {
    const formControl = input.parentElement;
    formControl.classList.remove("active");
}

// function isEmail(email) {
//     const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
//     const emailInputed = email.match(validRegex);

//     if (emailInputed) {
//         return true
//     } else {
//         return false
//     }
// 	// return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
// }