console.log("script loaded");
addEventListener("load", function () {
  console.log("document loaded");
  const form = document.querySelector("form");

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    console.log("form submitted");
    const username = document.querySelector("#username");
    const password = document.querySelector("#password");
    const errorMessageUsername =
      username.parentElement.querySelector(".error-message ");
    const errorMessagePassword =
      password.parentElement.querySelector(".error-message ");

    username.classList.remove("invalid-input");
    password.classList.remove("invalid-input");

    errorMessageUsername.innerHTML = "";
    errorMessagePassword.innerHTML = "";

    if (username.value === "") {
      username.classList.add("invalid-input");

      errorMessageUsername.innerHTML = `<div class="alert alert-danger p-0 " role="alert">O campo usuário deve ser preenchido</div></div>`;
    }
    if (password.value === "") {
      password.classList.add("invalid-input");

      errorMessagePassword.innerHTML = `<div class="alert alert-danger p-0 " role="alert">O campo senha deve ser preenchido</div></div>`;
    }
  });
});
