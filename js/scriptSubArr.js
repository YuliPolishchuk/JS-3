var arr = [1, 2, 3, 4];
var arrSub = [];
function getSubArr(array) {
  for(i = 0; i < array.length; i++) {
    for(var j = i; j < array.length; j++) {
      arrSub.push(array.slice(i, j+1));
    }
  }
  return arrSub;
}
console.log(getSubArr(arr));


