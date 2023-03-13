const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();

  // get the values
  const email = form.email.value;
  const password = form.password.value;

  console.log(email, password);
});

const signUpBtn = document.getElementById("signUp");
const signInBtn = document.getElementById("signIn");
const container = document.getElementById("container");

signUpBtn.addEventListener("click", () => {
  container.classList.add("right-panel-active");
});

signInBtn.addEventListener("click", () => {
  container.classList.remove("right-panel-active");
});
