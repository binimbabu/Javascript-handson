function titleCase(str) {
  return str.replace(/\b\w/g, (l) => l.toUpperCase());
}
console.log(titleCase("bini m babu"));
