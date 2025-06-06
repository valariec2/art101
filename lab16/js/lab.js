/*
 * Author: Valarie Situ 
 * Created: 2nd June
 * License: Public Domain
 */

$("#ajaxComic").click(function () {
  // Store latest comic number
  let latestComicNum;
  let randomComicURL;

  // First request: get the latest comic to find the max comic number
  $.ajax({
    url: "https://corsproxy.io/?https://xkcd.com/info.0.json",
    type: "GET",
    dataType: "json",
    success: function (data) {
      latestComicNum = data.num;
      let randomNum = Math.floor(Math.random() * latestComicNum);
      randomComicURL = `https://corsproxy.io/?https://xkcd.com/${randomNum}/info.0.json`;

      // Second request: get a random comic
      $.ajax({
        url: randomComicURL,
        type: "GET",
        dataType: "json",
        success: function (comicData) {
          let title = comicData.title;
          let image = comicData.img;
          let altText = comicData.alt;

          $("#output").html(`
            <h3>${title}</h3>
            <img src="${image}" alt="${altText}" title="${altText}">
            <p>${altText}</p>
          `);
        },
        error: function (jqXHR, textStatus, errorThrown) {
          console.log("Comic Fetch Error:", textStatus, errorThrown);
        }
      });
    },
    error: function (jqXHR, textStatus, errorThrown) {
      console.log("Initial Request Error:", textStatus, errorThrown);
    }
  });
});
