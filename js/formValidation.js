/* Validation form */

const form = document.getElementById("contactUs"),
      email = document.getElementById("mail"),
      subject = document.getElementById("subject"),
      msg = document.getElementById("msg");

function validateInputs() {
    let isValid = true; // Just to determinate if the flux is valid

    // Email 
    const emailValue = email.value.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailValue === "") {
        alert("Please enter an E-mail.");
        isValid = false;
    } else if (!emailPattern.test(emailValue)) {
        alert("Please enter a valid email address.");
        isValid = false;
    }

    // subject
    const subjectValue = subject.value.trim();
    if (subjectValue === "") {
        alert("Please enter a valid subject.");
        isValid = false;
    }

    //Message
    const msgValue = msg.value.trim();
    if (msgValue === "") {
        alert("Please enter a message.");
        isValid = false;
    }

    return isValid; 
}

// linked to the form
form.addEventListener("submit", function (event) {
    if (!validateInputs()) {
        event.preventDefault(); // don't send the form if is not valid
    }
});
