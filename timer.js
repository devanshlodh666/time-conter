let minutes = 0; 
let seconds = 5; 

const text = document.querySelector(".text");
const main = document.querySelector(".main");
const blast = document.querySelector(".main1");

blast.style.display = "none";  // blast ko initially hide rakho

// Update display
function updateDisplay() {
  text.textContent = 
    `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
}

// Countdown function
function startTimer() {
  updateDisplay(); // initial display

  const timer = setInterval(() => {
    if (seconds === 0) {
      if (minutes === 0) {
        // Timer finished
        clearInterval(timer);
        main.style.display = "none";
        blast.style.display = "flex";

        hideBlast(); // call blast hide after 2 sec
        return;
      } else {
        minutes--;
        seconds = 59; // not 60
      }
    } else {
      seconds--;
    }

    updateDisplay();
  }, 1000);
}

// Hide blast after 2s
function hideBlast() {
  setTimeout(() => {
    blast.style.display = "none";
  }, 2000);
}

// Start the timer
startTimer();





// let seconds = 10;
// const timerEl = document.getElementById('timer');

// const countdown = setInterval(() => {
//   timerEl.textContent = `00:${seconds < 10 ? '0' + seconds : seconds}`;
//   if (seconds <= 0) {
//     clearInterval(countdown);
//     timerEl.textContent = 'Time\'s up!';
//   }
//   seconds--;
// }, 1000);


//  let countdown;

//     function startTimer() {
//       const input = document.getElementById("timeInput");
//       let timeLeft = parseInt("200");

//       if (isNaN(timeLeft) || timeLeft <= 0) return;

//       // Hide input, show timer
//       // document.getElementById("inputSection").style.display = "none";
//       const timer = document.getElementById("time");
//       timer.textContent = timeLeft;

//       countdown = setInterval(() => {
//         timeLeft--;
//         timer.textContent = timeLeft;

//         if (timeLeft <= 0) {
//           clearInterval(countdown);
//           timer.style.display = "none";
//           // document.getElementById("boom").style.display = "block";
//         }
//       }, 1000);
//     }
