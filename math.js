//make a math constuctor becasue you don't have one!
function Math (){}

//create an add fucntion
Math.prototype.add = function(num1, num2){
    if (typeof num1 !== 'number' || typeof num2 !== 'number'){
        throw new Error("Parameters must be numbers")
     }
    return num1 + num2
}

// now, doing the multiplication version 
Math.prototype.multiply = function(num1, num2){
    return num1 * num2
}

// now, doing the division version 
// if statement conditions: throw error if num2 is 0, throw error if num1 OR num2 is not a number 
//isNan means "is not a number"
// I could change these to "if else" statements to throw errors
Math.prototype.divide = function(num1, num2){
    if (num2 === 0 || isNaN(num1) || isNaN(num2)){
        throw new Error("handle with an error if the denominator is 0")
     }
    return num1 / num2
}

Math.prototype.divide = function(num1, num2){
    if (typeof num1 === 'number' || typeof num2 === 'number'){
        throw new Error("handle with an error if the denominator is 0")
     }
    return num1 - num2
}

//writing a function to check if the values that are passed in are numbers means WRITE AN IF STATEMENT! 
/* if parameters are not numbers, 
then throw error. Otherwise, return num1 + num 2
*/


// export the Math constuctor so the other file can aquire it!
module.exports = Math 


/* add a divide functioin
- handle with an error if the denominator is 0
- think about number of place values (advanced)

include subtract function. 
- make sure the function can handle negative numbers
-

for all function, 
- pass in an unlimited number of arguments by using the REST operator
*/