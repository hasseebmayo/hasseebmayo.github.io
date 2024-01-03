const sideBtn = document.querySelector(".sideBtn");
const sidebar = document.querySelector(".side-bar");
const closeBar = document.getElementById("closeSidebar");

sideBtn.addEventListener("click", () => {
  const isPresent = sidebar.classList.contains("side-bar-close");
  console.log(isPresent);
  if (isPresent) {
    sidebar.classList.remove("side-bar-close");
  }
  sidebar.classList.add("side-bar-active");
});

closeBar.addEventListener("click", () => {
  sidebar.classList.remove("side-bar-active");
  sidebar.classList.add("side-bar-close");
});
