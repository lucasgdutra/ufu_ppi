document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("#form-login");
  if (!form) return;
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    // const email = document.querySelector("#email").value;
    // const password = document.querySelector("#password").value;

    window.location.href = "/";
  });
});
