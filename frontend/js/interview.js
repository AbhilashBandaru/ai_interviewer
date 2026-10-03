document.addEventListener("DOMContentLoaded", () => {

    const form = document.getElementById("interviewSetupForm");

    const role = document.getElementById("role");
    const experience = document.getElementById("experience");
    const questions = document.getElementById("questions");

    const roleError = document.getElementById("roleError");
    const experienceError = document.getElementById("experienceError");
    const difficultyError = document.getElementById("difficultyError");
    const interviewTypeError =
        document.getElementById("interviewTypeError");
    const questionsError =
        document.getElementById("questionsError");


    form.addEventListener("submit", (event) => {

        event.preventDefault();

        let isValid = true;


        /* ROLE */

        if (role.value === "") {
            roleError.textContent = "Please select a role.";
            role.classList.add("setup-invalid");
            isValid = false;
        } else {
            roleError.textContent = "";
            role.classList.remove("setup-invalid");
        }


        /* EXPERIENCE */

        if (experience.value === "") {
            experienceError.textContent =
                "Please select your experience level.";

            experience.classList.add("setup-invalid");

            isValid = false;
        } else {
            experienceError.textContent = "";
            experience.classList.remove("setup-invalid");
        }


        /* DIFFICULTY */

        const difficulty =
            document.querySelector(
                'input[name="difficulty"]:checked'
            );

        if (!difficulty) {
            difficultyError.textContent =
                "Please select a difficulty.";

            isValid = false;
        } else {
            difficultyError.textContent = "";
        }


        /* INTERVIEW TYPE */

        const interviewType =
            document.querySelector(
                'input[name="interviewType"]:checked'
            );

        if (!interviewType) {
            interviewTypeError.textContent =
                "Please select an interview type.";

            isValid = false;
        } else {
            interviewTypeError.textContent = "";
        }


        /* QUESTIONS */

        if (questions.value === "") {
            questionsError.textContent =
                "Please select the number of questions.";

            questions.classList.add("setup-invalid");

            isValid = false;
        } else {
            questionsError.textContent = "";
            questions.classList.remove("setup-invalid");
        }


        /* FINAL RESULT */

        if (isValid) {

            const setupData = {
                role: role.value,
                experience: experience.value,
                difficulty: difficulty.value,
                interviewType: interviewType.value,
                questions: Number(questions.value)
            };

            console.log("Interview configuration:", setupData);

            alert("Interview setup completed!");

            // Later this will navigate to the real interview room.
            // window.location.href = "interview.html";
        }

    });


    /* CLEAR ERRORS */

    role.addEventListener("change", () => {
        roleError.textContent = "";
        role.classList.remove("setup-invalid");
    });


    experience.addEventListener("change", () => {
        experienceError.textContent = "";
        experience.classList.remove("setup-invalid");
    });


    questions.addEventListener("change", () => {
        questionsError.textContent = "";
        questions.classList.remove("setup-invalid");
    });


    document
        .querySelectorAll('input[name="difficulty"]')
        .forEach((input) => {

            input.addEventListener("change", () => {
                difficultyError.textContent = "";
            });

        });


    document
        .querySelectorAll('input[name="interviewType"]')
        .forEach((input) => {

            input.addEventListener("change", () => {
                interviewTypeError.textContent = "";
            });

        });

});