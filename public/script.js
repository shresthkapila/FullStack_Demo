// var a = window.prompt("tell me ur name", "Name");
// window.alert("Hello " + a);


//functions

// func1(1,2,3);
// func2(); //not work here

// function func1(a,b,c) {
// 	console.log(a+b+c);

// }

// var func2 = function() {
// 	console.log("hello world");
// }

// func2();


// // - - sorting arrays
// function asc(a,b) {
// 	return a-b;
// }

// var arr = [10,32,63,4,545,46];
// arr.sort(asc);  // callback function

// // for(i=0 ; i<arr.length; i++) {
// // 	console.log(arr[i]);
// // }

// // for(item in arr) {
// // 	console.log(arr[item]);
// // }

// var x = arr.every(function(val) {
// 	return val > 5;

// });

// console.log(x);

// // --objects
// var person = { 
// 	firstName: "bob",
// 	lastname:  "smith",
// 	id : 5555,
// 	fullname: function(){
// 		return this.firstName + " " + this.lastname;
// 	}
// }


// function Person(f, l, i, a) {
// 	this.firstname = f;
// 	this.lastname = l;
// 	this.age = a;
// 	this.id = i;
// }

// --event handler

function runcommand() {
	document.getElementsByTagName("h1")[0].innerHTML = "ADD USERS";
}

document.getElementById("button").onclick = runcommand;
//document.getElementById("button").onclick = function(evt){console.log("hello");}

//document.getElementById("button").onclick = (evt)=>{console.log("hello")};

// - -event listeners
document.getElementById("button").addEventListener('click', (evt)=>{console.log("hello")});
document.getElementById("button").addEventListener('click', (evt)=>{console.log("world")});


window.addEventListener('keypress', (evt)=>{console.log(evt.keyCode)});









