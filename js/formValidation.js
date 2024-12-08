/* Validation form */

//CHECKBOX

const checkbox = document.querySelector('.my-form input[type="checkbox"]');
const btns = document.querySelectorAll(".my-form button");
checkbox.addEventListener("change", function() {
  const checked = this.checked;
  for (const btn of btns) {
    checked ? (btn.disabled = false) : (btn.disabled = true);
  }
});

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

  // Build a message about the upload.
    const form = document.getElementById('contactForm');
    const successMessage = document.getElementById('successMessage');
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
successMessage.style.display = 'Your Form is being send';
form.reset();
setTimeout(() => {
     successMessage.style.display = 'none';
}, 4000); // 4seconds and the message is hidden
});
