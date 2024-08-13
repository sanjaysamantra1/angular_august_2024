var a = 10;
var b = 10;
console.log(a == b); // true

var str1 = 'sachin';
var str2 = 'sachin';
console.log(str1 == str2); // true

var obj1 = { a: 100, b: 200 };
var obj2 = { a: 100, b: 200 };
console.log(obj1 == obj2); // false

var arr1 = [10, 20, 30]
var arr2 = [10, 20, 30]
console.log(arr1 == arr2); // false

console.log({} == {}); // address compare
console.log([] == []); // address compare