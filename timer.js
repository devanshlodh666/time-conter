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

let minutes = 30; 
let seconds = 0; 
let text = document.querySelector(".text");
let main = document.querySelector(".main");
let blast = document.querySelector(".main1");
  // if (seconds != 0 && minutes != 0) {
  blast.style.display = "none" 
  // }
  setInterval(() => {
    if (seconds === 0 && minutes > 0) {
    minutes--;
    seconds = 60;
  } 
  if (seconds > 0) {
    seconds--;
  }
    text.textContent = `${minutes < 10 ? '0' + minutes : minutes}:${seconds < 10 ? '0' + seconds : seconds}`;

  if (seconds == 0 && minutes == 0) {
    // end
    blast.style.display = "flex" 
    main.style.display = "none"
  }
}, 1000);
