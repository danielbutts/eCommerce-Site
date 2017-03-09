$('form').on('submit', function(e) {
  e.preventDefault();
  let userEmailInput = $('#email').val()

  if (userEmailInput === '') {
  $("#div1").fadeIn(300).delay(3000).fadeOut(300);
  } else {
  $("#div2").fadeIn(300).delay(3000).fadeOut(300);
  }
});
