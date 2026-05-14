let carbonCount = 0;

function updateTracker() {
    carbonCount += 290000;

    const element = document.getElementById("carbonTracker");
    const displayValue = `Since you joined, hummanity has exhausted ${carbonCount} Lbs of CO2 `;

    if (element) {
        element.textContent = displayValue;
    } else {
        console.log('Carbon tracker:', displayValue);
    }
}

window.addEventListener('DOMContentLoaded', () => {
    let element = document.getElementById("carbonTracker");
    updateTracker();
    setInterval(updateTracker, 100);
});
