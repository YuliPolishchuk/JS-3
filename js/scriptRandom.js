var arr = [1, 2, 3, 4, 5, 'a','b'];
function compareRandom(a, b) {
  return Math.random() - 0.5;
}
arr.sort(compareRandom);
console.log(arr);
