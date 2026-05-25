const hoursEl = document.getElementById('hours');
const minutesEl = document.getElementById('minutes');
const secondsEl = document.getElementById('seconds');

 updateClock = () => {
    let now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    let ampm = hours >= 12 ? 'PM' : 'AM';
    let displayHours = hours % 12 || 12; // Convert to 12-hour format

    hoursEl.innerHTML = displayHours;
    minutesEl.innerHTML = minutes;
    secondsEl.innerHTML = seconds;
    document.getElementById('ampm').innerHTML = ampm;
};

setInterval(updateClock, 1000);
updateClock();