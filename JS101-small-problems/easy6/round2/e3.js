// E3 Reverse Number:
// My Solution:
function reverseNumber(number) {
  return Number(String(number).split('').reverse().join(''));
}

// LS Solution:
function reverseNumber(number) {
  let numStringArray = String(number).split('');
  let reversedStringedNum = numStringArray.reverse().join('');
  return parseInt(reverseStringedNum, 10);
}
console.log(reverseNumber(12345)); // 54321
console.log(reverseNumber(12213)); // 31221
console.log(reverseNumber(456)); // 654
console.log(reverseNumber(12000)); // 21 -- Note that leading zeros in the result get dropped!
console.log(reverseNumber(1)); // 1
