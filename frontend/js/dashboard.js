document.addEventListener("DOMContentLoaded", () => {

    const startButtons = document.querySelectorAll(
        'a[href="interview-setup.html"]'
    );

    startButtons.forEach((button) => {

        button.addEventListener("click", () => {

            console.log("Opening interview setup...");

        });

    });

});