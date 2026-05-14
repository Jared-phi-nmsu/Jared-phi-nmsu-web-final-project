let carbonCount = Number(sessionStorage.getItem("carbonCount")) || 0;

function updateTracker() {
    carbonCount += 2947580; // https://www.pik-potsdam.de/en/institute/departments/climate-economics-and-policy/carbon-clock/remaining-carbon-budget

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