var flag = true;
var $window = $(window);
var $elem = $(".numberCounterUp")

function countUp(numberElement) {
  let current = 0;
  const total = parseInt(numberElement.textContent);
  const increment = Math.ceil(total / 100);

  function step() {
    current += increment;
    if (current > total) current = total;
    numberElement.textContent = current.toLocaleString();
    (current !== total) && requestAnimationFrame(step);
  }
  step();
}

function isScrolledIntoView($elem, $window) {
    var docViewTop = $window.scrollTop();
    var docViewBottom = docViewTop + $window.height();

    var elemTop = $elem.offset().top;
    var elemBottom = elemTop + $elem.height();

    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}
$(document).on("scroll", function () {
    if (flag && isScrolledIntoView($elem, $window)) {
      document.querySelectorAll('.numberCounterUp').forEach(elem => countUp(elem));
      flag = false;
    }
});
