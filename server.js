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
