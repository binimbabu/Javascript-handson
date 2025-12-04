function throttle(func, delay) {
  var last = 0;
  return function (...args) {
    var now = Date.now();
    if (now - last >= delay) {
      last = now;
      func.apply(this, args);
    }
  };
}

function handleScroll() {
  console.log("Scrolling...", Date.now());
}

window.addEventListener("scroll", throttle(handleScroll, 1000));
