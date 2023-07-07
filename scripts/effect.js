const movingElement = document.getElementsByClassName("navbar-1");
const colorChangeElement = document.getElementsByClassName("navbar-2");

window.addEventListener('scroll', function() {
      const rect = movingElement.getBoundingClientRect();
      const isInView = (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );

      if (!isInView) {
        colorChangeElement.style.backgroundColor = "white";
      } else {
        colorChangeElement.style.backgroundColor = "white";
      }
    });
    window.addEventListener('scroll', function() {
    var navbar1 = document.querySelector('.navbar-1');
    var navbar2 = document.querySelector('.navbar-2');
    var navbar1Height = navbar1.offsetHeight;
    if (window.pageYOffset >= navbar1Height) {
        navbar2.classList.add('sticky');
    } else {
     navbar2.classList.remove('sticky');
    }
    });

function countAnimation(target, duration, idc) {
  let start = 0;
  const step = Math.ceil(target / duration);
  const countElement = document.getElementById(idc);
  function animateCount() {
    start += step;
    countElement.textContent = start;
    if (start < target) {
      requestAnimationFrame(animateCount);
    } else {
      countElement.textContent = target;
    }
  }
  animateCount();
}

countAnimation(180, 1000, "count1");
countAnimation(10000, 230, "count2");
countAnimation(30000, 210, "count3");
countAnimation(700000, 200, "count4");

window.addEventListener('scroll', function() {
  var sidebar = document.getElementById('sidebar');
  if (window.pageYOffset > 450) {
    sidebar.style.display = 'block';
  } else {
    sidebar.style.display = 'none';
  }
});
