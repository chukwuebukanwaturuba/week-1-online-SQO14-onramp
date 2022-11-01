function fizzBuzz(input){
if (input % 3) {
    return "fizz";
} 
else if (input % 5) {
    return "buzz";
}
else if (input % 3 && input % 5) {
    return "fizzbuzz";
}
else {
    return Number;
}
}


module.exports = fizzBuzz
