$(document).ready(function() {
  
$("#tweet-text").on("input", function (event) {
  const maxCharacters = 140  
    let characterLength= event.target.value.length;
    let charactersLeft = 140 - characterLength;
    if (characterLength > maxCharacters) {
      $("#characterCount").css("color", "red");
    } else {
      $("#characterCount").css("color", "#545149");
    }
    $("#characterCount").text(charactersLeft)
  })
  
});