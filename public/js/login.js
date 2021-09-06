function loginFunction() {
    let login = document.getElementById("loginData").value;
    alert(login);
  }

  //Pasword validation
  let timeout;
  let password = document.getElementById("passwordData");
  let strongPassword = new RegExp(
    "(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})"
  );

  function checkPassword(passwordParameter) {
    if (strongPassword.test(passwordParameter)) {
      password.style = "color: green";
    } else {
      password.style = "color: #ff0000";
    }
  }

  passwordData.addEventListener("input", () => {
    clearTimeout(timeout);
    timeout = setTimeout(() => checkPassword(password.value), 100);
  });

  function logSubmit(event) {
    alert("You have been registeres successfully");
  }

  const form = document.getElementById("registerForm");
  form.addEventListener("submit", logSubmit);

  const data = { message: "example" };

  fetch("/variable", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => {
      response.text().then(function (data) {
        let result = JSON.parse(data);
        alert(result.va1);
      });
    })
    .catch((error) => {
        alert(error);
    });