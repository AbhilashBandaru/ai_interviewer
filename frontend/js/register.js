const registerForm = document.getElementById("registerForm");

const fullNameInput = document.getElementById("fullName");
const emailInput = document.getElementById("registerEmail");
const passwordInput = document.getElementById("registerPassword");
const confirmPasswordInput = document.getElementById("confirmPassword");
const termsInput = document.getElementById("terms");

const nameError = document.getElementById("nameError");
const emailError = document.getElementById("registerEmailError");
const passwordError = document.getElementById("registerPasswordError");
const confirmPasswordError = document.getElementById("confirmPasswordError");
const termsError = document.getElementById("termsError");


/* =========================
   PASSWORD TOGGLE
========================= */

function setupPasswordToggle(input, button) {

    button.addEventListener("click", () => {

        if (input.type === "password") {

            input.type = "text";
            button.textContent = "Hide";
            button.setAttribute("aria-label", "Hide password");

        } else {

            input.type = "password";
            button.textContent = "Show";
            button.setAttribute("aria-label", "Show password");
        }

    });

}


setupPasswordToggle(
    passwordInput,
    document.getElementById("registerPasswordToggle")
);

setupPasswordToggle(
    confirmPasswordInput,
    document.getElementById("confirmPasswordToggle")
);


/* =========================
   NAME VALIDATION
========================= */

function validateName() {

    const name = fullNameInput.value.trim();

    if (name === "") {

        nameError.textContent = "Full name is required";
        fullNameInput.classList.add("input-error");

        return false;
    }

    if (name.length < 3) {

        nameError.textContent = "Name must be at least 3 characters";
        fullNameInput.classList.add("input-error");

        return false;
    }

    nameError.textContent = "";
    fullNameInput.classList.remove("input-error");

    return true;
}


/* =========================
   EMAIL VALIDATION
========================= */

function validateEmail() {

    const email = emailInput.value.trim();

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email === "") {

        emailError.textContent = "Email is required";
        emailInput.classList.add("input-error");

        return false;
    }

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

        passwordError.textContent =
            "Password must be at least 8 characters";

        passwordInput.classList.add("input-error");

        return false;
    }

    passwordError.textContent = "";
    passwordInput.classList.remove("input-error");

    return true;
}


/* =========================
   CONFIRM PASSWORD
========================= */

function validateConfirmPassword() {

    const password = passwordInput.value;
    const confirmPassword = confirmPasswordInput.value;

    if (confirmPassword === "") {

        confirmPasswordError.textContent =
            "Please confirm your password";

        confirmPasswordInput.classList.add("input-error");

        return false;
    }

    if (password !== confirmPassword) {

        confirmPasswordError.textContent =
            "Passwords do not match";

        confirmPasswordInput.classList.add("input-error");

        return false;
    }

    confirmPasswordError.textContent = "";
    confirmPasswordInput.classList.remove("input-error");

    return true;
}


/* =========================
   TERMS VALIDATION
========================= */

function validateTerms() {

    if (!termsInput.checked) {

        termsError.textContent =
            "You must agree to the Terms & Conditions";

        return false;
    }

    termsError.textContent = "";

    return true;
}


/* =========================
   CLEAR ERRORS
========================= */

fullNameInput.addEventListener("input", () => {

    if (fullNameInput.value.trim() !== "") {

        nameError.textContent = "";
        fullNameInput.classList.remove("input-error");
    }

});


emailInput.addEventListener("input", () => {

    if (emailInput.value.trim() !== "") {

        emailError.textContent = "";
        emailInput.classList.remove("input-error");
    }

});


passwordInput.addEventListener("input", () => {

    if (passwordInput.value !== "") {

        passwordError.textContent = "";
        passwordInput.classList.remove("input-error");
    }

});


confirmPasswordInput.addEventListener("input", () => {

    if (confirmPasswordInput.value !== "") {

        confirmPasswordError.textContent = "";
        confirmPasswordInput.classList.remove("input-error");
    }

});


termsInput.addEventListener("change", () => {

    if (termsInput.checked) {

        termsError.textContent = "";
    }

});


/* =========================
   REGISTER FORM
========================= */

registerForm.addEventListener("submit", (event) => {

    event.preventDefault();

    const isNameValid = validateName();
    const isEmailValid = validateEmail();
    const isPasswordValid = validatePassword();
    const isConfirmPasswordValid = validateConfirmPassword();
    const areTermsAccepted = validateTerms();


    if (
        !isNameValid ||
        !isEmailValid ||
        !isPasswordValid ||
        !isConfirmPasswordValid ||
        !areTermsAccepted
    ) {

        console.log("Registration validation failed");

        return;
    }


    console.log("Registration validation successful");

    alert("Registration validation successful!");

});