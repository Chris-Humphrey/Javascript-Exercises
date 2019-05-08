var arr = [0, 1, 2, 3, 4, 5];


// Positive Numbers

// var pos = arr.filter(function(num){
//     return num > 0;
// })
// console.log(pos);


// Even Numbers

// var pos = arr.filter(function(num){
//     return num % 2 == 0
// })
// console.log(pos);


// Square the Numbers

// var squareTheNumbers = function(array){
//     var squares = array.map(function(num){
//         return Math.pow(num, 2);
//     });
//     return squares;
// }
// console.log(squareTheNumbers([1, 2, 3]));


//Cities 1

var cities = [ 
    { name: 'Los Angeles', temperature: 60.0}, 
    { name: 'Atlanta', temperature: 52.0 }, 
    { name: 'Detroit', temperature: 48.0 }, 
    { name: 'New York', temperature: 80.0 } ];


function cold(arr){
    return arr.filter(city => city.temperature < 70)
}

console.log(cold(cities));