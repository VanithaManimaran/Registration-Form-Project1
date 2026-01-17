        var btn = document.querySelector("button");
        var uname = document.getElementById("uname");
        var email = document.getElementById("email");
        var password = document.getElementById("password");

        function validateFields() {
            if (
                uname.value.trim() !== "" &&
                email.value.trim() !== "" &&
                password.value.trim() !== ""
            ) {
                btn.disabled = false;   // enable when all filled
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
            

             var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
             console.log(email.value.trim());
             console.log(emailPattern.test(email.value.trim()));
            if (!emailPattern.test(email.value.trim())) {
                alert("Please enter a valid email address");
                email.style.borderColor = "red";
                return;
            } else {
                email.style.borderColor = "";
            }
            alert("Registration Successful!");
        });

        //add event listnet for unmae for empty string show error
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