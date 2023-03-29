/* Goal:
Write four functions that add, subject, mulitply, and divide two numbers. The two numbers will be passed in as a parameter.

*/

//make math constructor. it needs to be uppercase b/c that's how we write constuctotrs. it means i'm creating a blueprint function, not just a regular variable.
const Math = require('./math')

// the descibe block descripbes the math constuctor then we will add arrow function

describe('Math', () => {
    //#add means add function
    describe('#add', () => {
        //time to write an actual test! first part:
        it('calculates sum of 5 and 6', () => {
            // do the set up part. the new keyword creates a new object based on the original Math type:
            const math = new Math() //we need to create a Math constructor for this in the math.js file for this to work
            const result = math.add(5, 6)
            //create a value called sum
            const sum = 11
            //write what we expect. "we expect when this function gets called the result will be 11"
            // expect(5,6).toBe(11) this is the long way. line 22 is the short way
            expect(result).toBe(sum)
        })
    })
})

// Now, mulitplying!

    //#add means add function
    describe('#multiply', () => {
        //time to write an actual test! first part:
        it('calculates product of 5 and 6', () => {
            // do the set up part. the new keyword creates a new object based on the original Math type:
            const math = new Math() //we need to create a Math constructor for this in the math.js file for this to work
            const result = math.multiply(5, 6)
            //create a value called sum. REMEMBER: change this to 30 becuase we are no longer adding. changed the var name to value becuase it's generic 
            const value = 30
            //write what we expect. "we expect when this function gets called the result will be 11"
            // expect(5,6).toBe(11) this is the long way. line 22 is the short way
            expect(result).toBe(value)
        })
    })

// sad path example
    describe('#add', () => {
        it('throws an error when non numbers are parameters', () => {
            const math = new Math()
            // making error function below
            const result = () => math.add("a", 4)
            //error below. what we want user to get when the pass in non numeric value
            // this Error object is built into JavaScript
            const err = new Error("Parameters must be numbers")
           expect(result).toThrow(err)
        })
    })

//do the diviide function 

    describe('#divide', () => {
        it('throws an error when non numbers are parameters', () => {
            const math = new Math()
            // making error function below
            const result = () => math.divide("a", 0)
            const err = new Error("handle with an error if the denominator is 0")
           expect(result).toThrow(err)
        })

    })

    describe('#divide', () => {
        it('throws an error when non numbers are parameters', () => {
            const math = new Math()
            // making error function below
            const result = () => math.divide("a", 1)
            const err = new Error("handle with an error if the denominator is 0")
           expect(result).toThrow(err)
        })
    })

    describe('#divide', () => {
        it('throws an error when non numbers are parameters', () => {
            const math = new Math()
            // making error function below
            const result = () => math.divide(2, "a")
            const err = new Error("handle with an error if the denominator is 0")
           expect(result).toThrow(err)
        })
    })

    describe('#subtract', () => {
        it('throws an error when non numbers are parameters', () => {
            const math = new Math()
            // making error function below
            const result = () => math.subtract(2, "a")
            const err = new Error("handle with an error if the denominator is 0")
           expect(result).toBe(difference)
        })
    })