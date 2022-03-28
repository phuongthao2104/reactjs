// Array.prototype
//foreach2
// Array.prototype.foreach2 = function(callback){
// 	for(let index in this) {
// 		if(this.hasOwnProperty(index)){
// 			callback(this[index], index, this);
// 		}
// 	}
// };

// const key = ["a","b"]
// key.foreach2(function (course, index, array){
// 	console.log(course, index, array);
// });
// // mapA
// Array.prototype.mapA = function (callback){
// 	let output = [];
// 	arryLenght = this.length;
// 	for(let i = 0; i < arryLenght; i++){
// 		let value = callback( this[i], i);
// 		output.push(value);
// 	}
// 	return output;
// }
 
//  const myArr = key.mapA(function(element){
// 	 console.log(element)
//  });