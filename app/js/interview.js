//1
var main-content = document.getElementById('main-content');

//2
(function(){
	console.log('Inside IIFE');
})();

//3
var returnType = function(variable) {
	return typeof(variable);
}

//4
var arrayList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function filterArray (arrayList) {
	var newArray = arrayList.filter(function(value){
		return value != 5;
	});
}

//5
function reverseString(str) {
	return str.split('').reverse().join('');
}

//6
var arrayList = [0,1];
function fibonacci(num) {
	for (var i=0; arrayList[i]+arrayList[i+1]<num; i++) {
		arrayList.push(arrayList[i]+arrayList[i+1]);
	}
	return arrayList;
}