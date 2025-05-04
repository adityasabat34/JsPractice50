//reverse a string

function reverseString(str) {
  return str.split("").reverse().join();
}

// console.log(reverseString("Aditya"));

//palindrome
function isPalidrome(str) {
  const normalized = str.toLowerCase().replace(/[\W_]/g, "");
  const reverseString = normalized.split("").reverse().join("");
  return normalized === reverseString;
}

// console.log(reverseString);
// console.log(isPalidrome("noon"));

function isLargestNumber(num) {
  return Math.max(...num);
}

// console.log(isLargestNumber([1, 2, 344, 44]));

//remove the first ele from an array

const arr = [2, 3, 5, 4, 5];
arr.shift();
console.log(arr);
