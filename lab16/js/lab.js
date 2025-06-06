// Using the core $.ajax() method
$.ajax({
    // The URL for the request (from the api docs)
    url: "https://xkcd.com/info.0.json",
    // The data to send (will be converted to a query string)
    data: {
    // here is where any data required by the api
    // goes (check the api docs)
    
        "month": "6",
        "num": 3098,
        "link": "",
        "year": "2025",
        "news": "",
        "safe_title": "Trojan Horse",
        "transcript": "",
        "alt": "Ultimately, history would imperfectly record the story of the Foal of Troy.",
        "img": "https://imgs.xkcd.com/comics/trojan_horse.png",
        "title": "Trojan Horse",
        "day": "4"
      
    },
    // Whether this is a POST or GET request
    type: "GET",
    // The type of data we expect back
    dataType : "json",
    // What do we do when the api call is successful
    // all the action goes in here
    success: function(comicObj) {
        console.log(comicObj);
        let html = `
          <h3>${comicObj.title}</h3>
          <img src="${comicObj.img}" alt="${comicObj.alt}" title="${comicObj.alt}">
          <p>${comicObj.alt}</p>
        `;
        $("#output").html(html);
      },
    // What we do if the api call fails
    error: function (jqXHR, textStatus, errorThrown) {
    // do stuff
    console.log("Error:", textStatus, errorThrown);
    }
    })