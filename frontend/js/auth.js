const loginForm = document.getElementById("loginForm");

const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");

const passwordToggle = document.getElementById("passwordToggle");

/* =========================
   SHOW / HIDE PASSWORD
========================= */

passwordToggle.addEventListener("click", () => {
    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        passwordToggle.textContent = "Hide";
        passwordToggle.setAttribute("aria-label", "Hide password");
    } else {
        passwordInput.type = "password";
        passwordToggle.textContent = "Show";
        passwordToggle.setAttribute("aria-label", "Show password");
    }
});


/* =========================
   EMAIL VALIDATION
========================= */

function validateEmail() {
    const email = emailInput.value.trim();

    if (email === "") {
        emailError.textContent = "Email is required";
        emailInput.classList.add("input-error");
        return false;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
        emailError.textContent = "Please enter a valid email address";
        emailInput.classList.add("input-error");
        return false;
    }

    emailError.textContent = "";
    emailInput.classList.remove("input-error");

    return true;
}

/* =========================
   PASSWORD VALIDATION
========================= */

function validatePassword() {
    const password = passwordInput.value;

    if (password === "") {
        passwordError.textContent = "Password is required";
        passwordInput.classList.add("input-error");
        return false;
    }

    if (password.length < 8) {
        passwordError.textContent = "Password must be at least 8 characters";
        passwordInput.classList.add("input-error");
        return false;
    }

    passwordError.textContent = "";
    passwordInput.classList.remove("input-error");

    return true;
}


/* =========================
   CLEAR EMAIL ERROR
========================= */

emailInput.addEventListener("input", () => {
    if (emailInput.value.trim() !== "") {
        emailError.textContent = "";
        emailInput.classList.remove("input-error");
    }
});


/* =========================
   CLEAR PASSWORD ERROR
========================= */

passwordInput.addEventListener("input", () => {
    if (passwordInput.value !== "") {
        passwordError.textContent = "";
        passwordInput.classList.remove("input-error");
    }
});


/* =========================
   LOGIN FORM
========================= */

loginForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const isEmailValid = validateEmail();
    const isPasswordValid = validatePassword();

    if (!isEmailValid || !isPasswordValid) {
        console.log("Login validation failed");
        return;
    }

    console.log("Login validation successful");

    alert("Login validation successful!");
});