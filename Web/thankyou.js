// Get the button element
const goHomeBtn = document.getElementById("goHomeBtn");

// Add event listener for button click
goHomeBtn.addEventListener("click", function() {
    window.location.href = "index.html"; // Redirect to homepage (replace with your actual homepage URL)
});

// Optional: Fade out effect on page load
window.addEventListener("load", () => {
    const thankYouMessage = document.querySelector(".thank-you-container");
    thankYouMessage.style.opacity = 0;
    setTimeout(() => {
        thankYouMessage.style.transition = "opacity 2s";
        thankYouMessage.style.opacity = 1;
    }, 200); // Delay before the fade-in effect starts
});
