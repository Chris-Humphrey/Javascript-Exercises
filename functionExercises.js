// Positive Numbers

var arr = [0, 1, 2, 3, 4, 5];

// var pos = arr.filter(function(num){
//     return num > 0;
// })
// console.log(pos);

var pos = arr.filter(function(num){
    return num % 2 == 0
})
console.log(pos);