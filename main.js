console.log("Loaded");
console.log(httpGet("https://meme-api.herokuapp.com/gimme"))

function httpGet(url)
{
    fetch(url).then(function(response) {
        return response.json();
      }).then(function(data) {
        console.log(data);
        var image = document.getElementById("image");
        var preview = data?.preview[data?.preview.length - 1]
        //console.log(preview[preview.length - 1])
        image.src = data?.url
      }).catch(function() {
        console.log("Booo");
      });
}

function getRandomMeme() {
    httpGet("https://meme-api.herokuapp.com/gimme")
}