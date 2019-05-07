"LEVEL 1"

// function lvl1exercise1 () {
//     // Declare a variable without instantiating it and return it!
//     var something;
//     return something;
//   }
//   console.log(lvl1exercise1())
  
//   function lvl1exercise2 () {
//     // Declare and instantiate a number and return it
//     var something = 2;
//     return something;
//   }
//   console.log(lvl1exercise2())
  
//   function lvl1exercise3 () {
//     // Declare and instantiate a floating point number that is not a whole number and return it
//     var float = 4.5;
//     return float;
//   }
//   console.log(lvl1exercise3())
  
//   function lvl1exercise4 () {
//     // Declare and instantiate a string "Hello World!" and return it
//     var string = "Hello World!";
//     return string;
//   }
//   console.log(lvl1exercise4())
  
//   function lvl1exercise5 () {
//     // Declare and instantiate an array containing the string "Hello World!" and the number 4 and return it
//     var myArray = ["Hello World!", 4];
//     return myArray;
//   }
//   console.log(lvl1exercise5())
  
//   function lvl1exercise6 () {
//     // Declare and instantiate an object containing the key-value pairs key1 -> "Hello World!" and key2 -> 4, and return it
//     var object = {
//         key1: "Hello World!",
//         key2: 4
//     }
//     return object;
//   }
//   console.log(lvl1exercise6())
  
//   function lvl1exercise7 () {
//     // Declare and instantiate a boolean value 'false' and return it
//     var boolean = false;
//     return boolean;
//   }
//   console.log(lvl1exercise7())


"LEVEL 2"

// function lvl2exercise1 (num1, num2) {
//     // Return the sum of num1 and num2
//     var sum = num1 + num2;
//     return sum;
// }
// console.log(lvl2exercise1(4,5))

// function lvl2exercise2 (num1, num2) {
// // Return the difference of num1 and num2
// var dif = num1 - num2;
// return dif;
// }
// console.log(lvl2exercise2(4,5))  

// function lvl2exercise3 (num1, num2) {
// // Return the multiplication of num1 and num 2
// var mult = num1 * num2;
// return mult;
// }
// console.log(lvl2exercise3(4,5)) 

// function lvl2exercise4 (num1, num2) {
// // Return the division of num1 and num2
// var div = num1 / num2;
// return div;
// }
// console.log(lvl2exercise4(4,5)) 

// function lvl2exercise5 (num1) {
// // Add 2 to num1 using += and return it
// num1 += 2;
// return num1;
// }
// console.log(lvl2exercise5(4,5)) 


"LEVEL 3"

// function lvl3exercise1 () {
//     // Create a "hello" and a "world", return the concatenation of the two
//     var a = "hello";
//     var b = "world";
//     return a + " " + b;
// }
// console.log(lvl3exercise1())

// function lvl3exercise2 () {
// // Create a "hello" and a 12, return the concatenation of the two
//     var a = "hello";
//     var b = 12;
//     return a + " " + b;
// }
// console.log(lvl3exercise2())

// function lvl3exercise3 () {
// // Create a variable that equals 12 and convert it to a string with concatenation. Return it.
//     var a = 12;
//     var b = a + ""
//     return b;
// }
// console.log(lvl3exercise3())

// function lvl3exercise4 () {
// // Create a "hello world!" string. Return the length of the string
//     a = "hello world!";
//     return a.length;
// }
// console.log(lvl3exercise4())

// function lvl3exercise5 () {
// // Create a "hello world!" string. Return the index of the word "world".
//     a = "hello world!";
//     b = a.split(' ');
//     return b[1];
// }
// console.log(lvl3exercise5())


"LEVEL 4"

// function lvl4exercise1 () {
//     // Return the boolean value "true"
//     a = true;
//     return a;
// }
// console.log(lvl4exercise1())

// function lvl4exercise2 () {
// // Return the boolean value "false"
//     a = !Boolean;
//     return a;
// }
// console.log(lvl4exercise2())

// function lvl4exercise3 (bool) {
// // Return the opposite of the input boolean value
//     a = !bool;
//     return a;
// }
// console.log(lvl4exercise3(false))

// function lvl4exercise4 (bool1, bool2) {
// // Return the logical "and" of the input boolean values
//     return bool1 && bool2;
// }
// console.log(lvl4exercise4(true, false))

// function lvl4exercise5 (bool1, bool2) {
// // Return the logical "or" of the input boolean values
//     return bool1 || bool2;
// }
// console.log(lvl4exercise5(true, false))

// function lvl4exercise6 (bool1, bool2) {
// // Return the logical "equivalence" of the input boolean values
//  return bool1 == bool2;
// }
// console.log(lvl4exercise6(true, false))


"LEVEL 5"

// function lvl5exercise1 () {
//     // Push the string "hello" into the array and return it.
//     var arr = [1, 'adam'];
//     arr.push("hello");
//     return arr;
// }
// console.log(lvl5exercise1())

// function lvl5exercise2 () {
// // Remove the last element from the array and return it
//     var arr = [1, 'adam']
//     arr.pop();
//     return arr;
// }
// console.log(lvl5exercise2())

// function lvl5exercise3 () {
// // Return the length of the array
//     var arr = [1, 'adam']
//     var newArr = arr.length
//     return newArr;
// }
// console.log(lvl5exercise3())

// function lvl5exercise4 () {
// // Return the index of "adam" in the array
//     var arr = [1, 'adam']
//     return arr[1];
// }
// console.log(lvl5exercise4())



"LEVEL 6"

function lvl6exercise1 (num) {
    // Return 'hello' if num is 1, 'world' if num is 2, otherwise return 'bye'
    if (num == 1){
        return "hello";
    } else if (num == 2){
        return "world";
    } else{
        return 'bye'
    }
}
console.log(lvl6exercise1(2))

function lvl6exercise2 () {
    // Push 10 'hello' strings into the array using a for loop, then return it
    var arr = []
    for(i = 0; i < 10; i++){
        arr.push("hello");
    }
    return arr;
}
console.log(lvl6exercise2())

function lvl6exercise3 () {
    // Empty this array using a while loop and return it
    var arr = ['hello', 'hello', 'hello', 'hello', 'hello', 'hello', 'hello', 'hello', 'hello', 'hello']
    while (arr.length >0){
        arr.pop();
    }
    return arr;
}
console.log(lvl6exercise3())