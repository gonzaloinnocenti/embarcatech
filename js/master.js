$(document).ready(function() {
  function getDate() {
    var d = new Date();
    var month = d.getMonth() + 1;
    var day = d.getDate();
    var output = (day < 10 ? '0' : '') + day + '/' + (month < 10 ? '0' : '') + month + '/' + d.getFullYear();

    return output;
  }
  $('.modal').modal();
  $('.collapsible').collapsible();
  $('.sidenav').sidenav();
  $('textarea').characterCounter();
  $('#closeCDBanner').on('click', function() {
    $('#countdownBanner').fadeOut();
  });
  $('#closeCallToEmbarcar').on('click',function () {
    $('#callToEmbarcar').fadeOut();
  });
  $('.dateToday').html(getDate());
  $('.btn-show').on('click', function() {
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

function gtag() {
  dataLayer.push(arguments);
}
gtag('js', new Date());
gtag('config', 'UA-117686071-1');
