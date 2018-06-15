const second = 1000,
  minute = second * 60,
  hour = minute * 60,
  day = hour * 24;
var callflag = true;

let countDown = new Date('aug 14, 2018 00:00:00').getTime(),
 maxCountDown = new Date('aug 16, 2018 00:00:00').getTime(),
  x = setInterval(function() {
    let now = new Date().getTime(),
      distance = countDown - now;
      maxLate = maxCountDown - now;
      if (maxLate < 0) {
        return;
      }
      //do something later when date is reached
      if (distance < 0 && callflag) {
        $('#callToEmbarcar').fadeIn();
        callflag = false;
      }
      if (distance > 0) {
        $(document.body).css('margin-top', $('#countdownBanner').height());
        $('#countdownBanner').show();
      }

    document.getElementById('cddays').innerText = Math.floor(distance / (day)),
      document.getElementById('cdhours').innerText = Math.floor((distance % (day)) / (hour)),
      document.getElementById('cdminutes').innerText = Math.floor((distance % (hour)) / (minute)),
      document.getElementById('cdseconds').innerText = Math.floor((distance % (minute)) / second);

  }, second);
