document.addEventListener("DOMContentLoaded", () => {

    /* ================================
       ELEMENTS
    ================================= */

    const currentQuestion =
        document.getElementById("currentQuestion");

    const totalQuestions =
        document.getElementById("totalQuestions");

    const questionText =
        document.getElementById("questionText");

    const answer =
        document.getElementById("answer");

    const characterCount =
        document.getElementById("characterCount");

    const answerError =
        document.getElementById("answerError");

    const submitAnswer =
        document.getElementById("submitAnswer");

    const timer =
        document.getElementById("timer");

    const questionProgress =
        document.getElementById("questionProgress");

    const questionStatus =
        document.getElementById("questionStatus");

    const exitInterview =
        document.getElementById("exitInterview");


    /* ================================
       INTERVIEW STATE
    ================================= */

    let currentQuestionNumber = 1;

    const totalQuestionCount = 10;

    let timeRemaining = 120;

    let timerInterval;


    /* ================================
       SAMPLE QUESTIONS
    ================================= */

    const questions = [
        "Explain the difference between a list and a tuple in Python.",

        "What is object-oriented programming and what are its main principles?",

        "Explain the difference between shallow copy and deep copy in Python.",

        "What is the difference between a process and a thread?",

        "Explain the difference between SQL and NoSQL databases.",

        "What is an API and how does a REST API work?",

        "Explain what normalization means in database design.",

        "What is the difference between authentication and authorization?",

        "Explain the concept of time complexity with an example.",

        "What happens when a user enters a URL into a browser?"
    ];


    /* ================================
       INITIAL SETUP
    ================================= */

    totalQuestions.textContent =
        totalQuestionCount;

    questionText.textContent =
        questions[0];

    updateProgress();

    updateCharacterCount();

    startTimer();


    /* ================================
       CHARACTER COUNT
    ================================= */

    answer.addEventListener("input", () => {

        updateCharacterCount();

        answerError.textContent = "";

    });


    function updateCharacterCount() {

        const currentLength =
            answer.value.length;

        characterCount.textContent =
            `${currentLength} / 2000`;

    }


    /* ================================
       TIMER
    ================================= */

    function startTimer() {

        updateTimerDisplay();

        timerInterval = setInterval(() => {

            timeRemaining--;

            updateTimerDisplay();

            if (timeRemaining <= 0) {

                clearInterval(timerInterval);

                handleTimeExpired();

            }

        }, 1000);

    }


    function updateTimerDisplay() {

        const minutes =
            Math.floor(timeRemaining / 60);

        const seconds =
            timeRemaining % 60;

        timer.textContent =
            `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;


        if (timeRemaining <= 30) {

            timer.classList.add("timer-danger");

        } else if (timeRemaining <= 60) {

            timer.classList.add("timer-warning");

        }

    }


    function handleTimeExpired() {

        timer.textContent = "00:00";

        answer.disabled = true;

        submitAnswer.disabled = true;

        questionStatus.textContent =
            "Time expired. Your interview has ended.";

    }


    /* ================================
       SUBMIT ANSWER
    ================================= */

    submitAnswer.addEventListener("click", () => {

        const userAnswer =
            answer.value.trim();


        if (userAnswer === "") {

            answerError.textContent =
                "Please enter an answer before continuing.";

            answer.focus();

            return;

        }


        answerError.textContent = "";

        moveToNextQuestion();

    });


    /* ================================
       NEXT QUESTION
    ================================= */

    function moveToNextQuestion() {

        if (
            currentQuestionNumber >=
            totalQuestionCount
        ) {

            finishInterview();

            return;

        }


        currentQuestionNumber++;

        answer.value = "";

        updateCharacterCount();

        questionText.textContent =
            questions[currentQuestionNumber - 1];

        currentQuestion.textContent =
            currentQuestionNumber;

        questionStatus.textContent =
            "Answer the question and submit to continue.";

        updateProgress();

    }


    /* ================================
       PROGRESS
    ================================= */

    function updateProgress() {

        const percentage =
            (currentQuestionNumber /
                totalQuestionCount) * 100;

        questionProgress.style.width =
            `${percentage}%`;

    }


    /* ================================
       FINISH
    ================================= */

    function finishInterview() {

        clearInterval(timerInterval);

        questionStatus.textContent =
            "Interview completed successfully!";

        answer.disabled = true;

        submitAnswer.disabled = true;

        alert("Interview completed!");

        // Later:
        window.location.href = "results.html";
    }


    /* ================================
       EXIT
    ================================= */

    exitInterview.addEventListener("click", () => {

        const shouldExit =
            confirm(
                "Are you sure you want to exit the interview?"
            );

        if (shouldExit) {

            clearInterval(timerInterval);

            window.location.href =
                "dashboard.html";

        }

    });

});