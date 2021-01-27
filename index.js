const resultBlock = document.querySelector("#result");
const pageNumberEl = document.querySelector("#pageNubmer");
const clickMeButton = document.querySelector("#click-Me");
const getTasksButton = document.querySelector("#getTasks");
clickMeButton.addEventListener("click", () => {
  const promise = getImages(pageNumberEl.value);
  promise.then(onImagesReceived);
});
getTasksButton.addEventListener("click", () => {
  const promise = getTasks();
  promise.then(onTasksReceived);
});
function onImagesReceived(data) {
  data.forEach((el) => {
    const img = document.createElement("img");
    img.src = el.thumbnail;
    document.querySelector("body").appendChild(img);
  });
}

// createTasks("learn JS").then((data) => {
//   console.log(data);
// });

function onTasksReceived(getTasks) {
  getTasks.forEach((tasks) => {
    const li = document.createElement("li");
    li.innerHTML = tasks.title;
    document.querySelector("#TasksResult").appendChild(li);
  });
}
