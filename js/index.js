// //bài 1: Sử dụng vòng lặp, tính tổng giá trị các phần tử trong mảng.
// Input: [0, 5, 4, 2, 8]
// Output: 19

var number = [0, 5, 4, 2, 8];
var sum = 0;
for ( var i = 0 ; i<number.length ; i++)
{
    sum = sum + number[i];
}
console.log(sum);

// bài 2. Sử dụng một mảng các đối tượng person (name, age) thành tổng
//  hợp mảng các tên người.
// Input: const person = [
// 	{ name: 'John', age: 24 },
// 	{ name: Pete, age: 25 },
// 	{ name: Mary', age: 28 }
// ]
// Output: ['John', 'Pete', 'Mary'].

const person = [
	{ name: 'John', age: 24 },
	{ name: 'Pete', age: 25 },
	{ name: 'Mary', age: 28 }];
var namePerson = [];
for(var value of person){
    namePerson.push(value.name);
}
console.log(namePerson);

// bài 3. Sử dụng các mảng dữ liệu tên người để tổng hợp thành mảng 
// tên người không trùng lặp.
// Input:	arr1 = ['John', 'Pete', 'Mary']
// 	arr2 = ['Mary', 'Henry', 'Harry']
// Output: ['John', 'Pete', 'Mary', 'Henry']

const arr1 = ['John', 'Pete', 'Mary'];
const arr2 = ['Mary', 'Henry', 'Harry'];
let myArray = [...arr1, ...arr2];

let myset = new Set(myArray); 
let result = Array.from(myset);

console.log(result);