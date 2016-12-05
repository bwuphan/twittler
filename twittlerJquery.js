var $body = $('body');
$body.html('<h1>Twittler</h1><div class = \'main\'</div> <button class = "button" name="button" value="OK" type="button">Refresh Tweets</button>');
var $main = $('.main');
var index = streams.home.length - 1;

function appendTweet(ndx){
  var tweet = streams.home[ndx];
  var $tweet = $('<p class = ' + tweet.user +'></p>');
  $tweet.html('<em id = \'user\'>@' + tweet.user + '</em>: ' + tweet.message + '<br>' + tweet.created_at);
  $tweet.appendTo($main);
}

function defaultTweets(){
  for(let i = 0; i < index; i++){
    appendTweet(i);
  }
}

function refreshTweets(){
  let tempCount = index + 10;
  for(let i = index + 1; i < tempCount; i++){
    appendTweet(i);
  }
}
function hideOthers(name){
  $(name).on('click', 'em', function(){
    var users = ['.sharksforcheap', '.mracus', '.douglascalhoun', '.shawndrost'];
    var nameIndex = users.indexOf(name);
    users.splice(nameIndex, 1);
    for(let i = 0; i < users.length; i++){
      $(users[i]).hide();
    }
  });
}

$(document).ready(function(){
  defaultTweets();
  $('button').on('click', function(){
    refreshTweets();
    hideOthers('.mracus');
    hideOthers('.sharksforcheap');
    hideOthers('.douglascalhoun');
    hideOthers('.shawndrost');
  });
  hideOthers('.mracus');
  hideOthers('.sharksforcheap');
  hideOthers('.douglascalhoun');
  hideOthers('.shawndrost');
});