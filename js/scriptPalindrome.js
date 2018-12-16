
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

test = isPalindrome('Анна');
test2 = isPalindrome('оно');
test3 = isPalindrome(' А роза упала на лапу Азора');

console.log(test);
console.log(test2);
console.log(test3);

