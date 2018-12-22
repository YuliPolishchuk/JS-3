var arr = [];
function getMaxSumSub(arr) {
  var max = -Infinity;
  var sum = 0;
  for (var i = 0; i < arr.length; i++) {
    for (var j = i; j < arr.length; j++) {
      sum += arr[j];
      if (sum > max) {
        max = sum;
      } 
    }
    sum = 0;
  }
  return (max > 0) ? max: -1;
}
console.log(getMaxSumSub([1, 34, -43, 24, 42, 2]));
console.log(getMaxSumSub([1, -2, 3, 4, -9, 6]));
console.log(getMaxSumSub([-1, -2, -3, -4, -9, -6]));
