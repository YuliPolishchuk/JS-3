
function isPalindrome(str) {
  str = str.toLowerCase().split(' ').join('');
  var strLen = str.length;
  var result = true;
  for (var i = 0; i < strLen; i++) {
    if (str[i] !== str[strLen - 1 - i]) {
      result = false;
      break;
    }
  }
  return result;
}

console.log(isPalindrome('Анна'));
console.log(isPalindrome('оно'));
console.log(isPalindrome(' А роза упала на лапу Азора'));

