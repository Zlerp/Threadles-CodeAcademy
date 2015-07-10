var main = function() {
  $('form').submit(function() {
    if(comment !== "") {
      var text = '<li>' + comment.value + '</li>';
      $('ul').prepend(text).addClass('comments');
      comment.value = "";
    }

    return false;
  });
};
$(document).ready(main);
