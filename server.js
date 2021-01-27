// function getImagesOld(pageNumber) {
//   const promise = $.ajax(
//     `https://repetitora.net/api/JS/Images?page=${pageNumberEl.value}&count=1`
//   );
//   return promise;
// }
//JQuery
function getImages(pageNumber) {
  const promise = axios.get(
    `https://repetitora.net/api/JS/Images?page=${pageNumberEl.value}&count=1`
  );
  return promise.then((data) => {
    return data.data;
  });
}
//axios
function getTasks() {
  const promise = axios.get(
    `https://repetitora.net/api/JS/Tasks?widgetId=6422`
  );
  return promise.then((response) => {
    return response.data;
  });
}
function createTasks(title) {
  const promise = axios.post(`https://repetitora.net/api/JS/Tasks`, {
    widgetId: 6422,
    title: title,
  });
  return promise.then((response) => {
    return response.data;
  });
}
