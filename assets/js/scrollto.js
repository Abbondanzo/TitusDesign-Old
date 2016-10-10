$(document).ready(function(){
  $(".scrollTo").on('click', function(event) {
    event.preventDefault();
    var hash = this.hash;
    $('html, body').animate({
      scrollTop: $(hash).offset().top-76
    }, 800, function(){
      window.location.hash = hash;
    });
  });
});