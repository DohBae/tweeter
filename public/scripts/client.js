/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(document).ready(function () {
  
/***
 * write a tweet function that accepts a tweet object and returns a tweet's structure
 *  -use function to generate tweet structure
 * apend result to DOM element
 */

  const tweetData = {
    "user": {
      "name": "Newton",
      "avatars": "https://i.imgur.com/73hZDYK.png",
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  }
  
  
  const createTweetElement = function (tweetObject) {
    console.log(tweetObject);
    const $tweet = $(`<br><article class="tweetsHomePage">
    <header>
      <div>
        <img src="https://i.imgur.com/nlhLi3I.png">
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
  }
  
  $('#tweets-container').append(createTweetElement(tweetData));
})