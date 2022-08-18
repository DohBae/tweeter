/*
* Client-side JS logic goes here
* jQuery is already loaded
* Reminder: Use (and do all your DOM work in) jQuery's document ready function
*/

$(document).ready(function() {
  // driver code
  // const data = [
  //   {
  //     "user": {
  //       "name": "Newton",
  //       "avatars": "https://i.imgur.com/73hZDYK.png"
  //       ,
  //       "handle": "@SirIsaac"
  //     },
  //     "content": {
  //       "text": "If I have seen further it is by standing on the shoulders of giants"
  //     },
  //     "created_at": 1461116232227
  //   },
  //   {
  //     "user": {
  //       "name": "Descartes",
  //       "avatars": "https://i.imgur.com/nlhLi3I.png",
  //       "handle": "@rd" },
  //     "content": {
  //       "text": "Je pense , donc je suis"
  //     },
  //     "created_at": 1461113959088
  //   }
  // ];
  
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
    <span>${tweetObject.created_at}</span>
    <div>
    <span class="flag"><i class="fa-solid fa-flag"></i></span>
    <span class="retweet"><i class="fa-solid fa-retweet"></i></span>
    <span class="heart"><i class="fa-solid fa-heart"></i></span>
    </div>
    </footer>
    </article>`);
    return $tweet;
  };
  
  const renderTweets = function(tweetArray) {
    for (const tweet of tweetArray) {
      const newTweet = createTweetElement(tweet);
      $('#tweets-container').prepend(newTweet);
    }
  };

  const loadTweets = function() {
    const $submitButton = $(".tweetButton");
    
    // $submitButton.on('submit', function() {
      // console.log("form submitted");
      $.ajax({
        type: "GET",
        url: "http://localhost:8080/tweets/",
        dataType: "json",
        success: (response) => {
          renderTweets(response);
          // $("#tweets-container").append(response);
          }
        // })
    // })
    // $.ajax("/tweets", {method: "GET"})
    // .then(function(userTweets) {
    //   console.log(userTweets)
    //   $("#tweet-text").append(response);
      
    })
  }
  loadTweets();


  const $tweetTextArea = $('.newTweet');

  $tweetTextArea.submit((event) => {
    event.preventDefault();
    let data = $('form').serialize();
    $.ajax({
      type: "POST",
      url: "/tweets",
      data: data,
      success: (response) => {
        loadTweets();
        // console.log(response)
      }
    });
  })
  

});