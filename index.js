$('form').on('submit', function(e) {
  e.preventDefault();
  var valid = $('#email').val()
  if (valid === '') {
  $("#div1").fadeIn(500).delay(3000).fadeOut(500);
  } else {
  $("#div2").fadeIn(500).delay(3000).fadeOut(500);
  }
});
