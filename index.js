$('form').on('submit', function(e) {
  e.preventDefault();
  let userEmailInput = $('#email').val()

  if (userEmailInput === '') {
  $("#div1").fadeIn(300).delay(3000).fadeOut(300);
  } else {
  $("#div2").fadeIn(300).delay(3000).fadeOut(300);
  }
});

let myTimer = setInterval(cycleHero, 4000);

function cycleHero() {
  if ($('#hero1').hasClass('display')) {
      $('#hero1').removeClass('display');
      $('#hero1').addClass('hidden');
      $('#hero2').removeClass('hidden');
      $('#hero2').addClass('display');
    } else if ($('#hero2').hasClass('display')) {
      $('#hero2').removeClass('display');
      $('#hero2').addClass('hidden');
      $('#hero3').removeClass('hidden');
      $('#hero3').addClass('display');
    } else if ($('#hero3').hasClass('display')) {
      $('#hero3').removeClass('display');
      $('#hero3').addClass('hidden');
      $('#hero1').removeClass('hidden');
      $('#hero1').addClass('display');
  }
};

$('#right-bttn').click(function() {
   clearInterval(myTimer);
   myTimer = setInterval(cycleHero, 4000);

  if ($('#hero1').hasClass('display')) {
      $('#hero1').removeClass('display');
      $('#hero1').addClass('hidden');
      $('#hero2').removeClass('hidden');
      $('#hero2').addClass('display');
    } else if ($('#hero2').hasClass('display')) {
      $('#hero2').removeClass('display');
      $('#hero2').addClass('hidden');
      $('#hero3').removeClass('hidden');
      $('#hero3').addClass('display');
    } else if ($('#hero3').hasClass('display')) {
      $('#hero3').removeClass('display');
      $('#hero3').addClass('hidden');
      $('#hero1').removeClass('hidden');
      $('#hero1').addClass('display');
  }
});

$('#left-bttn').click(function() {
  clearInterval(myTimer);
  myTimer = setInterval(cycleHero, 4000);

  if ($('#hero1').hasClass('display')) {
      $('#hero1').removeClass('display');
      $('#hero1').addClass('hidden');
      $('#hero3').removeClass('hidden');
      $('#hero3').addClass('display');
    } else if ($('#hero3').hasClass('display')) {
      $('#hero3').removeClass('display');
      $('#hero3').addClass('hidden');
      $('#hero2').removeClass('hidden');
      $('#hero2').addClass('display');
    } else if ($('#hero2').hasClass('display')) {
      $('#hero2').removeClass('display');
      $('#hero2').addClass('hidden');
      $('#hero1').removeClass('hidden');
      $('#hero1').addClass('display');
  }
});
