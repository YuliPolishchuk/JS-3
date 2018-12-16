
function isPalindrome(str) {
  str = str.toLowerCase().split(' ').join('');
  var strLen = str.length;
  var result = false;
  for (var i = 0; i < strLen; i++) {
    if (str[i] === str[strLen - 1 - i]) {
      result = true;
    } else {
      result = false;
    }
  }
  return result;
}

console.log(isPalindrome('Анна'));
console.log(isPalindrome('оно'));
console.log(isPalindrome(' А роза упала на лапу Азора'));

