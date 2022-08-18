/*
* Client-side JS logic goes here
* jQuery is already loaded
* Reminder: Use (and do all your DOM work in) jQuery's document ready function
*/

$(document).ready(function() {
  
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
    <p class="tweetContent">${tweetObject.content.text}</p>
    <footer>
    <span>${timeago.format(new Date (tweetObject.created_at))}</span> 
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
  const errorAlert = function(errorMessage) {
    let message = "Error: " + errorMessage
    alert(message);
    return true;
    
  }
    // User tweets being sent to server after clicking submit button
    const $tweetForm = $('.newTweet');
    
    
    $tweetForm.on("submit", ((event) => {
      event.preventDefault();
      let tweetTextArea = $("#tweet-text")
      console.log("TweetText: ")
      console.log(tweetTextArea.val())
      // getting tweet text, validating 
    if (tweetTextArea.val().length > 140) {
      errorAlert( "too many characters");
    } else if (tweetTextArea.val().length === 0) {
      errorAlert("please enter text in the text field")
    }
      let data = $('form').serialize();
      $.ajax({
        type: "POST",
        url: "/tweets",
        data: data,
        success: (response) => {
          loadTweets();
        }
      });
  }));
});