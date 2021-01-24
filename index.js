const resultBlock = document.querySelector("#result");
const pageNumberEl = document.querySelector("#pageNubmer");
const clickMeButton = document.querySelector("#click-Me");
clickMeButton.addEventListener("click", () => {
  const promise = getImages(pageNumberEl);
  promise.then(onDataReceived);
});
function onDataReceived(data) {
  data.forEach((el) => {
    const img = document.createElement("img");
    img.src = el.thumbnail;
    document.querySelector("body").appendChild(img);
  });
}
