$(document).ready(function() {
  
$("#tweet-text").on("input", function (event) {
  const maxCharacters = 140  
    let characterLength= event.target.value.length;
    let charactersLeft = 140 - characterLength;
    if (characterLength > maxCharacters) {
      $("#characterCount").css("color", "red");
      // $(this).siblings(".counter").val(maxCharacters)
    } else {
      // $(this).siblings(".counter")
      $("#characterCount").css("color", "#545149");
    }
    $("#characterCount").text(charactersLeft)
  })
  
});












// let maxCharacters = 140

// $(".counter").text(maxCharacters);

// $(".textarea").bind("keyup keydown", function () {
//   let characterCount = $(".counter");
//   let characters = $(this).val().length;

//   if (characters > maxCharacters) {
//     characterCount.addClass("over");
//   } else {
//     characterCount.removeClass("over");
//   }

//   characterCount.text(maxCharacters - characters)
// });