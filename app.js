const event = "25 Dec 2021";
const daysShow = document.getElementById("days");
const hoursShow = document.getElementById("hours");
const minutesShow = document.getElementById("minutes");
const secondsShows = document.getElementById("seconds");
function countdown() {
  const newYearsDate = new Date(event);
  const currentDate = new Date();
  const totalValue = new Date(newYearsDate - currentDate) / 1000;
  const days = Math.floor(totalValue / 3600 / 24);
  const hours = Math.floor((totalValue / 3600) % 24);
  const minutes = Math.floor((totalValue / 60) % 60);
  const seconds = Math.floor(totalValue % 60);
  daysShow.innerHTML = days;
  hoursShow.innerHTML = hours;
  minutesShow.innerHTML = minutes;
  secondsShows.innerHTML = seconds;
}
countdown();
setInterval(countdown, 1000);
