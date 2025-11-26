function debounce(func, delay) {
  let timer;
  return function (...args) {
    clearTimeout(timer); // reset timer if function is called again
    timer = setTimeout(() => {
      func.apply(this, args); // call the original function
    }, delay);
  };
}
function fetchData() {
  console.log("API Call...");
}

const debouncedFetch = debounce(fetchData, 500);

window.addEventListener("scroll", debouncedFetch);
