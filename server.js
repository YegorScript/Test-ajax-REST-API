function getImages(pageNumber, successCallback) {
  $.ajax(
    `https://repetitora.net/api/JS/Images?page=${pageNumberEl.value}&count=1`,
    {
      success: successCallback,
    }
  );
}
