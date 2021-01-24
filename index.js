const resultBlock = document.querySelector("#result");
const pageNumberEl = document.querySelector("#page-nubmer");
const clickMeButton = document.querySelector("#click-me");
clickMeButton.addEventListener("click", () => {
  getImages();
});
