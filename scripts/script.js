const container = document.getElementById("main-container");
const registerInp = document.getElementById("register");
const loginInp = document.getElementById("login");

registerInp.addEventListener("click", () => {
  container.classList.add("active");
});

loginInp.addEventListener("click", () => {
  container.classList.remove("active");
});
