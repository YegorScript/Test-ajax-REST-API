function getImages() {
  $.ajax(`https://repetitora.net/api/JS/Images/page=${pageNumber.value}`, {
    success: function (data) {
      data.forEach((el) => {
        const img = document.createElement("img");
        img.src = el.thumbnail;
        document.querySelector("body").appendChild(img);
      });
    },
  });
}
