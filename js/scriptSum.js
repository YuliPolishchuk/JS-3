var arr = [3, 2, 5, 6, 24, 34, 34, 44];
function arraySum(array) {
  var sum = 0;
  for (var i = 0; i < array.length; i++) {
    sum += array[i];
  }
  console.log(sum);
}
arraySum(arr);
