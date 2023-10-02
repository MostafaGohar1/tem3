let ourSkills = document.querySelector(".our-skills");
let skillSpans = document.querySelectorAll(".our-skills .box span");
window.onscroll = function () {
  if (window.scrollY >= ourSkills.offsetTop - 100) {
    skillSpans.forEach(function (span) {
      span.style.width = span.dataset.width;
    });
  }
};

let countDown = new Date();
countDown = new Date(countDown.getFullYear() + 1, countDown.getMonth() - 6, 1);

let x = setInterval(function () {
  let currDate = new Date();
  let diff = countDown - currDate;

  let days = Math.floor(
    (diff % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24)
  );
  let hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((diff % (1000 * 60)) / 1000);

  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;
}, 1000);
