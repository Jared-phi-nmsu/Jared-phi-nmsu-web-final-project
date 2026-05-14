const openTime = "09:00";
const closeTime = "17:30";

function timeToMinutes(timeStr) {
    const [hours, minutes] = timeStr.split(":").map(Number);
    return hours * 60 + minutes;
}

function checkStatus() {

    const currentTime = new Date();
    const currentMinutes = currentTime.getHours() * 60 + currentTime.getMinutes();
    const openMinutes = timeToMinutes(openTime);
    const closeMinutes = timeToMinutes(closeTime);
    
    const status = document.getElementById("status");

    if (currentMinutes >= openMinutes && currentMinutes < closeMinutes) {
        status.textContent = "We are OPEN";
        status.style.color = "green";
    } else {
        status.textContent = "We are CLOSED";
        status.style.color = "red";
    }
}

checkStatus();
setInterval(checkStatus, 10000);