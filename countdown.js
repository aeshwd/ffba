// Set the target date
const targetDate = new Date('September 20, 2024 00:00:00').getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const timeDifference = targetDate - now;

    if (timeDifference <= 0) {
        document.getElementById('countdown').innerHTML = '<div class="countdown-item">Time\'s up!</div>';
        return;
    }

    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    document.getElementById('days').innerHTML = `<span>${days}</span> Days`;
    document.getElementById('hours').innerHTML = `<span>${hours}</span> Hours`;
    document.getElementById('minutes').innerHTML = `<span>${minutes}</span> Minutes`;
    document.getElementById('seconds').innerHTML = `<span>${seconds}</span> Seconds`;
}

// Update the countdown every second
setInterval(updateCountdown, 1000);
