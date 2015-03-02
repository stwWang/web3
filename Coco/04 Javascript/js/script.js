var testClosure = function(){
	var x=4;
	var closeX = function(){
		return x;
	}
	return closeX;
}

//minus(2,5)
// function minus(a, b){
// 	return a-b;
// }

alert("haha");


// newminus(4, 1)
var newminus = function minus(a, b){
	return a - b;
}



//-----------------------------------------------
// We can make newMinus, myAdd as private; and runAction as public;
// newminus(5, 1)
//This is the best, because it saves memory; since it will only be loadec to memory when it's called
var newminus = function (a, b){
	return a - b;
}

var myAdd = function(a, b){
	return a + b;
}

function runAction(action, a, b){
	return action(a, b);
}

//-----------------------------------------------
var numbers = [12, 4, 3, 7]
var results = numbers.map(function(item){
	return item * 2;
});

// first one is the value itself, the 2nd one is the index, and 3rd one is the whole array
var results = numbers.map(function(item1, item2, item3){
	console.log(item1);
	console.log(item2);
	console.log(item3);
	return item1 * 2;
});


//-----------------------------------------------
numbers.push(34);
var popNum = numbers.pop(); //stack, FILO
var shiftNum = numbers.shift(); //queue, FIFO

console.log("done");

//-----------------------------------------------
//code closure
//testClosure(12, [12, 4, 3, 7])()
function testClosure(number, numbers){
	for (var i=0;i<numbers.length;i++){
		if (numbers[i] == number){
			return findNum = function () {
				alert("you find number: " + number + " at index" + i);
			}
		}
	}

}

//myBox, will print out the structure
//myBox.toString()
//myBox.daxiao.toString()
var myBox = {
	chang: 10, //myBox.change, or myBox["chang"]
	kuan: 20,
	gao: 15,
	daxiao: function() {
		return myBox.chang * myBox.kuan * this.gao;
	},
	description: "wo ha ha ha",
	"ni shuo sha": "ca ca ca", //if there is space between the name, you must have double-quotes
	//myBox["ni shuo sha"]
}


//-----------------------------------------------
//Prototype
//myBox.color
object.prototype.color = "red"; 
//is the same as
String.prototype.color = "red";
//Object.__proto__.color = "red";
Function.prototype.id = 


var myBox = function (a, b, c){
	chang: a, //myBox.change, or myBox["chang"]
	kuan: b,
	gao: c,
	daxiao: function() {
		return myBox.chang * myBox.kuan * this.gao;
	},
	description: "wo ha ha ha",
	"ni shuo sha": "ca ca ca", //if there is space between the name, you must have double-quotes
	//myBox["ni shuo sha"]
}

var str = new myBox(1,2,3);

