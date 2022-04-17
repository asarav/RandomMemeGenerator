console.log("Loaded");
console.log(httpGet("https://meme-api.herokuapp.com/gimme"))

function httpGet(url)
{
    fetch(url).then(function(response) {
        return response.json();
      }).then(function(data) {
        console.log(data);
      }).catch(function() {
        console.log("Booo");
      });
}