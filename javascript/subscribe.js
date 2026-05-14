const form = document.getElementById("contactForm");
const email = document.getElementById("email").value.trim();
const emailPattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/; // https://regexr.com/3e48o
form.addEventListener("submit", function (e) {
    e.preventDefault();

    document.querySelectorAll(".error").forEach((e) => {
        e.textContent = "";
    });    
    
    let isValid = true;

    if (!emailPattern.test(email)) {
        document.getElementById("emailError").textContent = "Please enter a valid email address.";
        isValid = false;
    }

    if (isValid) {
        const formData = {email};

        console.log("Subscribe To Newsletter");
        console.log(formData);

        alert("Newsletter Subscribed Successfully!");

        form.reset();
    }
});
