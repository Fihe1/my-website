document.addEventListener("DOMContentLoaded", () => {
  const title = document.querySelector("h1");

  title.addEventListener("click", () => {
    title.textContent = "You clicked me!";
  });
});