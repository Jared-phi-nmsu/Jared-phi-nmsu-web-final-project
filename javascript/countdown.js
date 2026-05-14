const timeLimit = new Date('July 21, 2029 23:59:59'); // https://climateclock.world/
const status = document.getElementById('statusCountdown');

function updateCountdown() {
    const today = new Date();
    const timeLeft = timeLimit - today;

    const seconds = Math.floor(timeLeft / 1000) % 60;
    const minutes = Math.floor(timeLeft / (1000 * 60)) % 60;
    const hours = Math.floor(timeLeft / (1000 * 60 * 60)) % 24;
    const days = Math.floor(timeLeft / (1000 *60 * 60 * 24));

    status.textContent =
        `${days}d ${hours}h ${minutes}m ${seconds}s Left To Limit Global Warming To 1.5C`;
    status.style.color = 'darkred';
}

updateCountdown();
setInterval(updateCountdown, 1000);