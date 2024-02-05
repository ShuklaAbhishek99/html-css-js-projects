const taskbar = document.getElementsByClassName("taskbar")[0];
const startMenu = document.getElementsByClassName("start-menu")[0];


taskbar.addEventListener("click", () => {
    console.log('closfsf')
  if (startMenu.style.bottom == "50px") {
    startMenu.style.bottom = "-1000px";
  } else {
    startMenu.style.bottom = "50px";
  }
});
