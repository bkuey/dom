$(function() {
  $("button#hello").click(function() {
    $("ul#user").append("<li>Hello!</li>");
    $("ul#webpage").append("<li>Why hello there!</li>");
    $("ul#user").children("li").last().click(function(){
      alert('hi');
      $(this).remove();
    });
    $("ul#webpage").children("li").last().click(function(){
      alert('hi2');
      $(this).remove();
    });
  });

  $("button#goodbye").click(function() {
    $("ul#user").append("<li>Goodbye!</li>");
    $("ul#webpage").append("<li>Goodbye, dear user!</li>");
    $("ul#user").children("li").last().click(function() {
      alert('hi');
      $(this).remove();
    });
    $("ul#webpage").children("li").last().click(function() {
      alert('hi2');
      $(this).remove();
    });
  });

  $("button#stop").click(function() {
    $("ul#user").append("<li>Stop copying me!</li>");
    $("ul#webpage").append("<li>Pardon me. I meant no offense.</li>");
    $("ul#user").children("li").last().click(function(){
      alert('hi');
      $(this).remove();
    });
    $("ul#webpage").children("li").last().click(function() {
      alert('hi2');
      $(this).remove();
    });
  });
});
