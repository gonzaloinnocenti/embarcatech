var flag2 = true;
var $window2 = $(window);
var $elem2 = $(".numberCounterUp2")

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

function isScrolledIntoView($elem2, $window2) {
    var docViewTop = $window2.scrollTop();
    var docViewBottom = docViewTop + $window2.height();

    var elemTop = $elem2.offset().top;
    var elemBottom = elemTop + $elem2.height();

    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}
$(document).on("scroll", function () {
    if (flag2 && isScrolledIntoView($elem2, $window2)) {
      document.querySelectorAll('.numberCounterUp2').forEach(elem2 => countUp(elem2));
      flag2 = false;
    }
});
