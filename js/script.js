// task1
// let totalSeconds = 3600;

// const formatTime = ((timer) => { 
//     const hours = Math.floor(seconds / 3600);
//     const minutes = Math.floor((seconds % 3600) / 60);
//     const remainingSeconds = seconds % 60;
//     return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
// })

// const timer = setInterval(() => {
//     console.log(`Залишилось часу: ${formatTime(totalSeconds)}`);

//     if (totalSeconds === 1800) {
//         console.log("Увага! Залишилось менше половини часу.");
//     }

//     totalSeconds -= 60;

//     if (totalSeconds <= 0) {
//         clearInterval(timer);
//         console.log("Час вичерпано!");
//     }
// }, 60000);


//task2
let totalMilliseconds = 30000; 
let timerInterval;

function startTimer() {

    const startButton = document.getElementById("startButton");
    startButton.disabled = true;
    startButton.classList.remove("active");

    const timerDisplay = document.getElementById("timerDisplay");
    const animateBox = document.getElementById("animate");
    
    timerInterval = setInterval(() => {
        totalMilliseconds -= 1;
  
        const seconds = (totalMilliseconds / 1000).toFixed(3);
        timerDisplay.textContent = seconds;

        if (totalMilliseconds <= 10000 && !animateBox.classList.contains("shake")) {
            animateBox.classList.add("shake");
        }

        if (totalMilliseconds <= 0) {
            clearInterval(timerInterval);
            animateBox.classList.remove("shake");
            timerDisplay.textContent = "0.000";

            startButton.disabled = false;
            startButton.classList.add("active");
            totalMilliseconds = 30000; 
        }
    }, 1);
}
document.getElementById("startButton").disabled = false;
document.getElementById("startButton").classList.add("active");
