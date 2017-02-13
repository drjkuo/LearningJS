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

