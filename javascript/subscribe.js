const form = document.getElementById("contactForm");
const emailInput = document.getElementById("email");

const emailPattern = /^(?!\.)(?!.*\.\.)([a-z0-9_'+\-\.]*)[a-z0-9_+\-]@([a-z0-9][a-z0-9\-]*\.)+[a-z]{2,}$/i; // https://colinhacks.com/essays/reasonable-email-regex

form.addEventListener("submit", function (e) {
    e.preventDefault();

    document.querySelectorAll(".error").forEach((el) => {
        el.textContent = "";
    });

    const email = emailInput.value.trim();

    let isValid = true;

    if (!emailPattern.test(email)) {
        document.getElementById("emailError").textContent =
            "Please enter a valid email address.";
        isValid = false;
    }

    if (isValid) {
        const formData = { email };

        console.log("Subscribe To Newsletter");
        console.log(formData);

        alert("Newsletter Subscribed Successfully!");

        form.reset();
    }
});