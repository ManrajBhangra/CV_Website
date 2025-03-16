window.onload = function () {
  let github = document.getElementById("github");
  let linkedin = document.getElementById("linkedin");

  github.onclick = function () {
    location.href = "https://github.com/ManrajBhangra";
  };

  linkedin.onclick = function () {
    location.href = "https://www.linkedin.com/in/manraj-bhangra-81b2402b4/";
  };

  let submit = document.getElementById("submit");

  if (submit !== null) {
    submit.onclick = validateForm;
  }

  function checkEmails() {
    let form = document.getElementById("Contact-form");
    form.email.setCustomValidity("");
    if (form.email.value !== form.Remail.value) {
      return false;
    } else {
      return true;
    }
  }

  function checkDate() {
    let form = document.getElementById("Contact-form");
    var Start = new Date(form.Start.value);
    var Today = new Date();
    form.Start.setCustomValidity("");
    if (Start < Today) {
      return false;
    } else {
      return true;
    }
  }

  function checkDateEnd() {
    let form = document.getElementById("Contact-form");
    var Start = new Date(form.Start.value);
    var End = new Date(form.End.value);
    form.End.setCustomValidity("");
    if (Start >= End) {
      return false;
    } else {
      return true;
    }
  }

  function validateForm() {
    let form = document.getElementById("Contact-form");
    var email = checkEmails();
    var start = checkDate();
    var end = checkDateEnd();
    let errors = 0;
    let emailError = "";
    let startError = "";
    let endError = "";
    if (!email) {
      errors += 1;
      emailError += "\nEmails must match";
    }
    if (!start) {
      errors += 1;
      startError += "\nStart date must be after today";
    }
    if (!end) {
      errors += 1;
      endError += "\nEnd date must be after Start date";
    }

    if (errors === 0) {
      let summary = "Name: " + form.FirstName.value;
      summary += "\nPhone Number: " + form.tel.value;
      summary += "\nEmail: " + form.email.value;
      summary += "\nContact by " + form.ContactPref.value;
      summary += "\nStart date: " + form.Start.value;
      summary += "  End date: " + form.End.value;
      summary += "\nProject Description is:" + form.txtAr.value;
      summary += "\n\nTo 230098246@aston.ac.uk";
      summary += "\nIs this information correct?";
      if (confirm(summary) === true) {
        return true;
      } else {
        return false;
      }
    } else {
      form.End.setCustomValidity(endError);
      form.End.reportValidity();
      form.Start.setCustomValidity(startError);
      form.Start.reportValidity();
      form.email.setCustomValidity(emailError);
      form.email.reportValidity();
      return false;
    }
  }
};
