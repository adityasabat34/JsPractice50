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
// console.log(arr);

//write a program using callback func

function greet(name, callback) {
  const message = `Hello ${name}`;
  callback(message);
}

function showMessage(arg) {
  // console.log(arg);
}
greet("Aditya", showMessage);

//add a num
function add(a, b) {
  return a + b;
}
// console.log(add(2, 6));

///////////////////////////////////////////////////////

function isPalidrom(str) {
  const normalizedStr = str.toLowerCase().replace(/[\W_]/g, "");
  const reverseStr = normalizedStr.split("").reverse().join("");
  return reverseStr === normalizedStr;
}

// console.log("SIgn", isPalidrom("Levl"));

//////////////////////////////////////////////////////////

function preet(arg, cb) {
  const name = `hello ${arg}!`;
  cb(name);
}

function showMessage(msg) {
  // console.log(msg);
}

// preet("Aditya", showMessage);

//////////////////////////////////////////////////////////////

///////////// add a property to an obejct in JS//////////////////////////

const person = { name: "Aditya" };
person.age = 21;
// console.log(person);

//////////////////////// delete a property ////////////////////////////

const people = { name: "Aditya", age: 22 };
delete people.age;
// console.log(people);

///////////////////////////////////////////////////////////////////

// console.log([1, 2, 3].reduce((a, b) => a + b));

/////////////////////////////////////////////////////////////////////////

console.log("sahil".repeat(3));
