const form = document.getElementById("contactForm");

const emailPattern = /^(?!\.)(?!.*\.\.)([a-z0-9_'+\-\.]*)[a-z0-9_+\-]@([a-z0-9][a-z0-9\-]*\.)+[a-z]{2,}$/i;
const phonePattern = /^\d{10}$/;

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const message = document.getElementById("message").value.trim();

    document.querySelectorAll(".error").forEach((el) => {
        el.textContent = "";
    });

    let isValid = true;

    if (name.length < 2) {
        document.getElementById("nameError").textContent = "Please enter a valid name.";
        isValid = false;
    }

    if (!emailPattern.test(email)) {
        document.getElementById("emailError").textContent = "Please enter a valid email address.";
        isValid = false;
    }

    if (phone && !phonePattern.test(phone)) {
        document.getElementById("phoneError").textContent = "Please enter a valid phone number.";
        isValid = false;
    }

    if (message.length < 10) {
        document.getElementById("messageError").textContent = "Message must be at least 10 characters.";
        isValid = false;
    }

    if (isValid) {
        console.log("Contact Form Submitted:", { name, email, phone, message });

        alert("Form submitted successfully!");
        form.reset();
    }
});