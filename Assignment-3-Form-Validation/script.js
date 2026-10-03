function validateForm() {
    let valid = true;

    document.querySelectorAll("span").forEach(function(span) {
        span.innerText = "";
    });

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let password = document.getElementById("password").value;

    if (name === "") {
        document.getElementById("nameError").innerText = "Name is required";
        valid = false;
    }

    if (!email.includes("@")) {
        document.getElementById("emailError").innerText = "Enter valid email";
        valid = false;
    }

    if (!/^[0-9]{10}$/.test(phone)) {
        document.getElementById("phoneError").innerText = "Enter 10 digit phone";
        valid = false;
    }

    if (password.length < 6) {
        document.getElementById("passwordError").innerText = "Minimum 6 characters";
        valid = false;
    }

    if (valid) {
        document.getElementById("success").innerText = "Registration successful!";
    }

    return false;
}