 $(function () {
    $('.scroll-down').click (function() {
      $('html, body').animate({scrollTop: $('#Runrunit').offset().top}, 350);
      return false;
    });
  });