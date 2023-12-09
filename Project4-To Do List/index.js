let timerInterval;
let seconds;

function startTimer() {
    const mealInput = document.getElementById("mealInput").value;
    seconds = parseInt(document.getElementById("timerInput").value);

    if (mealInput === "" || isNaN(seconds) || seconds <= 0) {
        alert("Please enter a valid meal and timer value.");
        return;
    }

    document.getElementById("timer").innerText = formatTime(seconds);

    timerInterval = setInterval(() => {
        seconds--;
        document.getElementById("timer").innerText = formatTime(seconds);

        if (seconds === 0) {
            clearInterval(timerInterval);
            completeTimer();
        }
    }, 1000);
}


function completeTimer() {
    clearInterval(timerInterval);
    const currentTime = new Date().toLocaleTimeString();
    const completedMeal = document.getElementById("mealInput").value;

    // code to play the external audio 
    const audio = new Audio('loudalarm.mp3');
    audio.play();

    document.getElementById("history").innerHTML += `<p>${currentTime}: ${completedMeal}</p>`;

    // Clear input fields
    document.getElementById("mealInput").value = "";
    document.getElementById("timerInput").value = "";
}



function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
}
