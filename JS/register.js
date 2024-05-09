document.getElementById("registrationForm")
  .addEventListener("submit", (event) => {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;
    var nameerror = document.getElementById("nameerror");
    var emailerror = document.getElementById("emailerror");
    var passerror = document.getElementById("passerror");
    var cpasserror = document.getElementById("cpasserror");

    if (name.trim() === "") {
      nameerror.innerHTML = "Please enter your name.";
      event.preventDefault();
    } else {
      nameerror.innerHTML = "";
    }

    if (email.trim() === "") {
      emailerror.innerHTML = "Please enter your email.";
      event.preventDefault();
    } else {
      emailerror.innerHTML = "";
    }

    if (!isValidEmail(email)) {
      emailerror.innerHTML = "Please enter a valid email address.";
      event.preventDefault();
    } else {
      emailerror.innerHTML = "";
    }

    if (password.trim() === "") {
      passerror.innerHTML = "Please enter a password.";
      event.preventDefault();
    } else {
      passerror.innerHTML = "";
    }

    if (password !== confirmPassword) {
      cpasserror.innerHTML = "Passwords do not match.";
      event.preventDefault();
    } else {
      cpasserror.innerHTML = "";
    }
  });

function isValidEmail(email) {
  var emailRegex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return emailRegex.test(String(email).toLowerCase());
}
