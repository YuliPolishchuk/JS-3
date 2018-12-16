var arr = [1, 332, 5353, 436, 46];
var max = getMaxResult(arr);
function getMaxResult(arr) {
  var max = arr[0]; 
  for (var i = 0; i < arr.length; i++) { 
    if (max < arr[i]) max = arr[i]; 
  }
  return max; 
}
console.log(max);