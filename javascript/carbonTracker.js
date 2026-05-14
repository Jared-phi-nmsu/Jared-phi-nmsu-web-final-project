let carbonCount = Number(sessionStorage.getItem("carbonCount")) || 0;

function updateTracker() {
    carbonCount += 290000;

    sessionStorage.setItem("carbonCount", carbonCount);

    const element = document.getElementById("carbonTracker");

    const displayValue =
        `Since you joined, humanity has exhausted ${carbonCount.toLocaleString()} Lbs of CO2`;

    if (element) {
        element.textContent = displayValue;
    } else {
        console.log('Carbon tracker:', displayValue);
    }
}

window.addEventListener('DOMContentLoaded', () => {
    updateTracker();

    setInterval(updateTracker, 100);
});