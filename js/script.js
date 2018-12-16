var numberCandy = [43, 23, 57, 54, 60, 41, 10, 60, 23, 47, 60, 12, 59];
var numberBestResult = [];
var max = getBestResultAndShowAllREsults(numberCandy);
function getBestResultAndShowAllREsults(numberCandy) {
  var max = numberCandy[0]; 
  for (var i = 1; i < numberCandy.length; i++) { 
    if (max < numberCandy[i]) max = numberCandy[i]; 
    console.log(i + ' - результат - ' + numberCandy[i]);
  }
  return max; 
}
console.log('Наилучший результат: '+ max);
console.log('Всего проведено исследований: ' + numberCandy.length);

function indexBestResult(numberCandy, max) {
  for (var i = 0; i < numberCandy.length; i++) {
    if (numberCandy[i] === max) {
      numberBestResult.push(i+1);
    }
  }
 console.log(numberBestResult);
}



