$(document).ready(function(){

 // $('button').on('click',function(){
 //   var search = $('#search').val();
 //   searchReddit(search);
 // });
 function searchReddit(){
$.get('http://www.reddit.com/r/food/.json').done(function(response){
  console.log(response.data.children[0].data);
//
 // var reddits =['author','thumbnail',]
  for(i = 0; i < response.data.length; i++){
    var author = response.data.children[i].data.author;
    var thumbnail = response.data.children[i].data.thumbnail;
    var score = response.data.children[i].data.score;
    $('body').append("<div><p>" + author + " </p></div>");
  }
  searchReddit();
});
});
// });
// });
// });
