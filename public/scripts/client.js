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
    // console.log(tweetObject);
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
    // return $tweet;
    $('#tweets-container').append($tweet);
  }
  
  const data = [
    {
      "user": {
        "name": "Newton",
        "avatars": "https://i.imgur.com/73hZDYK.png"
        ,
        "handle": "@SirIsaac"
      },
      "content": {
        "text": "If I have seen further it is by standing on the shoulders of giants"
      },
      "created_at": 1461116232227
    },
    {
      "user": {
        "name": "Descartes",
        "avatars": "https://i.imgur.com/nlhLi3I.png",
        "handle": "@rd" },
        "content": {
          "text": "Je pense , donc je suis"
        },
        "created_at": 1461113959088
      }
    ]
    
    // console.log(data)
    /***
     * write a function that accepts a an array of tweets and adds each one to the #tweets-container
     * use createTweetElement function to pass the tweet object into it, then appending the returned jquery object to #tweets-container section
     * loops through data (tweets)
     *  -use createTweetElement to return jquery object
     * takes return value and appends it to #tweets-container
     */
    
    const renderTweets = function(tweetArray) {
    // let $tweet = [];
    for (const tweet of tweetArray) {
      // let userTweet = tweet.user;
      // console.log(profilePic);
      // let realName = tweet.user.name;
      // console.log(realName)
      // let userHandle = tweet.user.handle;
      // console.log(userHandle);
      // let userContent = tweet.content.text;
      // console.log(userContent);
      // let createdAt = tweet.created_at;
      // console.log(createdAt)
      // $tweet = [profilePic, realName, userHandle, userContent, createdAt]
      // console.log($tweet);
      // $tweet = userTweet;
      // console.log($tweet);
      createTweetElement(tweet);
    }
    // return $tweet
  }
  renderTweets(data)
})
