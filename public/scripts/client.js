/*
* Client-side JS logic goes here
* jQuery is already loaded
* Reminder: Use (and do all your DOM work in) jQuery's document ready function
*/

$(document).ready(function() {

  const escape = function (str) {
    let div = document.createElement("div");
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  };
  
  // format for how tweets need to be displayed
  const createTweetElement = function(tweetObject) {

    let $tweet = $(`<br><article class="tweetsHomePage">
    <header>
    <div>
    <img src=${tweetObject.user.avatars}>
    <span>${tweetObject.user.name}</span>
    </div>
    <span class="handle">${tweetObject.user.handle}</span>
    </header>
    <p class="tweetContent">${escape(tweetObject.content.text)}</p>
    <footer>
    <span>${timeago.format(new Date(tweetObject.created_at))}</span> 
    <div>
    <span class="flag"><i class="fa-solid fa-flag"></i></span>
    <span class="retweet"><i class="fa-solid fa-retweet"></i></span>
    <span class="heart"><i class="fa-solid fa-heart"></i></span>
    </div>
    </footer>
    </article>`);
    return $tweet;
  };
  
  // Adds new tweet to the tweeter homepage. Newest tweets displayed on top
  const renderTweets = function(tweetArray) {
    for (const tweet of tweetArray) {
      const newTweet = createTweetElement(tweet);
      $('#tweets-container').prepend(newTweet);
    }
  };

  // Getting submitted tweets fromm server
  const loadTweets = function() {
    $.ajax({
      type: "GET",
      url: "http://localhost:8080/tweets/",
      dataType: "json",
      success: (response) => {
        renderTweets(response);
      }
    });
  };
  loadTweets();

  // alert error function
  // const errorAlert = function(errorMessage) {
  //   let message = "Error: " + errorMessage;
  //   alert(message);
  //   return true;
  // };
    // User tweets being sent to server after clicking submit button
  const $tweetForm = $('.newTweet');
    
  $tweetForm.on("submit", ((event) => {
    event.preventDefault();
    let tweetTextArea = $("#tweet-text");

    // document.write(<div> data-error="tldr; tweet too long" </div>)

    if (tweetTextArea.val().length > 140) {
      $("#errorMessageChar").css({"display": "flex", "justify-content": "center", "background-color": "#ffb6c1", "color": "red", "border": "solid red", "margin": "20px", "padding": "10px", "font-weight": "bold", "text-align": "center"});
      $("#errorMessageChar").hide().slideDown();
      $("#errorMessageChar").on("click", () => {
        $("#errorMessageChar").css({"display": "none"});
      })
      return false;
    } else if (tweetTextArea.val().length === 0) {
      $("#errorMessageEmpty").css({"display": "flex", "justify-content": "center", "background-color": "#ffb6c1", "color": "red", "border": "solid red", "margin": "20px", "padding": "10px", "font-weight": "bold", "text-align": "center"});
      $("#errorMessageEmpty").hide().slideDown()
      $("#errorMessageEmpty").on("click", () => {
        $("#errorMessageEmpty").css({"display": "none"});
      })
      return false;
    } 
    
    $("#errorMessageChar").css({"display": "none"});
    $("#errorMessageEmpty").css({"display": "none"});
    
    let data = $('form').serialize();
    $.ajax({
      type: "POST",
      url: "/tweets",
      data: data,
      success: (response) => {
        loadTweets();
      }
    });
    $(".newTweet").children("input").val("");
  }));
});

