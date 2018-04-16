$(document).ready(function() {

  $('.modal').modal();
  $('.collapsible').collapsible();
  $('.sidenav').sidenav();
  $('textarea').characterCounter();
  $('.btn-show').on('click',function(){
    $(this).parents().siblings().removeClass('hide-on-med-and-down');
    $(this).addClass('hide-on-med-and-down');
  });
  $("a").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function() {
        window.location.hash = hash;
      });
    }
  });
});

// Google Analytics
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'UA-117686071-1');
