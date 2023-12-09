// Variable to store the timer interval and seconds
let timerInterval;
let seconds;

// Function to start the timer
function startTimer() {
    // Get meal input and timer duration
    const mealInput = document.getElementById("mealInput").value;
    seconds = parseInt(document.getElementById("timerInput").value);

    // Check for valid inputs
    if (mealInput === "" || isNaN(seconds) || seconds <= 0) {
        alert("Please enter a valid meal and timer value.");
        return;
    }

    // Display initial time on the timer
    document.getElementById("timer").innerText = formatTime(seconds);

    // Set interval to update timer every second
    timerInterval = setInterval(() => {
        seconds--;
        document.getElementById("timer").innerText = formatTime(seconds);

        // When the timer reaches 0, complete the timer
        if (seconds === 0) {
            clearInterval(timerInterval);
            completeTimer();
        }
    }, 1000);
}

// Function to complete the timer
function completeTimer() {
    // Stop the timer interval
    clearInterval(timerInterval);

    // Get current time and completed meal
    const currentTime = new Date().toLocaleTimeString();
    const completedMeal = document.getElementById("mealInput").value;

    // Play an external audio file (loudalarm.mp3)
    const audio = new Audio('loudalarm.mp3');
    audio.play();

    // Update the history with the completed meal and time
    document.getElementById("history").innerHTML += `<p>${currentTime}: ${completedMeal}</p>`;

    // Clear input fields
    document.getElementById("mealInput").value = "";
    document.getElementById("timerInput").value = "";
}

// Function to format time in MM:SS format
function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
}

