
var btn = document.querySelector("button");
var uname = document.getElementById("uname");
var email = document.getElementById("email");
var password = document.getElementById("password");

// ADD: move the regex up so both validateFields and click handler can use it
var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validateFields() {
    // ADD: also check email format and password length
    const isNameOk = uname.value.trim() !== "";
    const emailVal = email.value.trim();
    const isEmailOk = emailVal !== "" && emailPattern.test(emailVal);
    const isPasswordOk = password.value.trim().length >= 6;

    if (isNameOk && isEmailOk && isPasswordOk) {
        btn.disabled = false;   // enable when all valid
    } else {
        btn.disabled = true;    // keep disabled otherwise
    }
}

// Run validation whenever user types
uname.addEventListener("input", validateFields);
email.addEventListener("input", validateFields);
password.addEventListener("input", validateFields);

// Optional: handle click
btn.addEventListener("click", function (event) {
    event.preventDefault();

    // NOTE: emailPattern already defined above
    const nameVal = uname.value.trim();
    const emailVal = email.value.trim();
    const passVal = password.value.trim();

    // ADD: validate name
    if (nameVal === "") {
        alert("Name cannot be empty");
        uname.style.borderColor = "red";
        return;
    } else {
        uname.style.borderColor = "";
    }

    // Existing: validate email
    if (!emailPattern.test(emailVal)) {
        alert("Please enter a valid email address");
        email.style.borderColor = "red";
        return;
    } else {
        email.style.borderColor = "";
    }

    // ADD: validate password length
    if (passVal.length < 6) {
        alert("Password must be at least 6 characters long");
        password.style.borderColor = "red";
        return;
    } else {
        password.style.borderColor = "";
    }

    alert("Registration Successful!");
});

// add event listener for uname for empty string show error
uname.addEventListener("focusout", function () {
    if (uname.value.trim() === "") {
        alert("Name cannot be empty");
        uname.style.borderColor = "red";
    } else {
        uname.style.borderColor = "";
    }
});
email.addEventListener("focusout", function () {
    if (email.value.trim() === "") {
        alert("Email cannot be empty");
        email.style.borderColor = "red";
    } else {
        email.style.borderColor = "";
    }
});

password.addEventListener("focusout", function () {
    if (password.value.trim().length < 6) {
        alert("Password must be at least 6 characters long");
        password.style.borderColor = "red";
    } else {
        password.style.borderColor = "";
    }
});
