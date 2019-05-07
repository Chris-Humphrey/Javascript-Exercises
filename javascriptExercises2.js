"MADLIB"

// function madlib(name, place){
//     return name + "'s favorite place in all the world is " + place + ".";
// }
// console.log(madlib('Jess', 'Jerusalem'));


"TIP CALCULATOR"

// function tipAmount(bill, service){
//     if (service == "good"){
//         return bill * .2;
//     } else if (service == "fair") {
//         return bill * .15;
//     } else if (service == "bad") {
//         return bill * .1;
//     } else {
//         return 'That is not a valid level of service';
//     }
// }
// console.log(tipAmount(40, "fair"));


"TIP CALCULATOR 2"

// function totalAmount(bill, service){
//     if (service == "good"){
//         return bill+(bill * .2);
//     } else if (service == "fair") {
//         return bill+(bill * .15);
//     } else if (service == "bad") {
//         return bill+(bill * .1);
//     } else {
//         return 'That is not a valid level of service';
//     }
// }
// console.log(totalAmount(40, 'fair'));


"PRINT NUMBERS"

// function printNumbers(start, end){
//     for(i = start; i <= end; i++){
//         console.log(i);
//     }
// }
// printNumbers(1,10);


"PRINT A SQUARE"

function printSquare(size){
    var a = "*";
    for(i = 0; i < size; i++){
        for(i = 0; i < size; i++){
            console.log(a.repeat(size))
        }
    }
}
printSquare(5);


"PRINT A BOX"

function printBox(width, height){
    var a = "*";
    var count = 0;
    for(i = 0; i < width; i++){
        if(count == 0 || count == )
        console.log(a.repeat(width))
    }
}