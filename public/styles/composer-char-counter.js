$(document).ready(function() {
  
  let maxCharacters = 140
  
  $(".counter").text(maxCharacters);
  
  $(".textarea").bind("keyup keydown", function () {
    let characterCount = $(".counter");
    let characters = $(this).val().length;
  
    if (characters > maxCharacters) {
      characterCount.addClass("over");
    } else {
      characterCount.removeClass("over");
    }
  
    characterCount.text(maxCharacters - characters)
  });
  
});











