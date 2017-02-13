 var obj = {};  // 空對象

 obj.foo = 123; // set

 console.log(obj.foo); //get


// object
var obj1 = {};
var obj2 = {};
console.log(obj1 === obj2);
console.log(obj1 === obj1);

//primitive values
var prim1 = 111;
var prim2 = 111;
console.log(prim1 === prim2);


foo();

// function foo() {
//     'use strict';
//     bar();  // hoist
//     function bar() {
//       console.log("1");
//     }
// }

function foo() {
    'use strict';
    bar();  // no hoist
    var bar = function () {
      console.log("111");
    }
}

var result = [];
for (var i=0; i < 5; i++) {
    result.push(function () { return i });  // (*)
}
console.log(result[1]()); // 5 (不是 1)
console.log(result[3]()); // 5 (不是 3)

console.log(result[1]); // function () { return i }
console.log(result[3]); // function () { return i }

