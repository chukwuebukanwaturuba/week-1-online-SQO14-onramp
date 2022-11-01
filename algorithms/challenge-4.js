function calculateGrade(marks) {
 if(marks >= 1 && marks <= 49) {
    return "F";
 }
 else if(marks >= 50 && marks <= 59) {
    return "E";
 } 
 else if(marks >= 60 && marks <= 69) {
    return "D";
 } 
 else if(marks >= 70 && marks <= 79) {
    return "C";
 }
 else if(marks >= 80 && marks <= 89) {
    return "B";
 }
 else if(marks >= 90 && marks <= 100) {
    return "a";
 } else {
    return "Input number between 1-100";
 }
 }
 let result = calculateGrade(70);

 console.log(result);
  module.exports =calculateGrade
