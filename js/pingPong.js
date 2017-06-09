// Business logic...
var divisible = function(input) {
  for(var i = 1; i <= input; i++) {
    if ((i % 3 === 0)&&(i % 5 === 0)) {
      $("#list").append('<li>' + "ping pong" + '<li>');
    } else if (i % 5 === 0) {
      $("#list").append('<li>' + "pong" + '<li>');
    } else if (i % 3 === 0) {
      $("#list").append('<li>' + "ping" + '<li>');
    }
    else {
      $("#list").append('<li>' + i + '<li>');
    }
  };

};
// User interface logic...
$(document).ready(function () {
  $("#form").submit(function(event) {
    event.preventDefault();
    $("#list").text("");
    var input = parseInt($("#input").val());
    var result = divisible(input);
  })
});
