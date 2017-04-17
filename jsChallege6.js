//Challenge #6: Create a function that takes an array of numbers and returns the smallest number in the set.

//My Answer:
function findSmallestNum(arr) {
  
}

//Notes

    //The Math.min() function returns the smallest of zero or more numbers.
        Math.min([value1[, value2[, ...]]])
            //Parameters: value1, value2, ... Numbers.
            //Return Value: The smallest of the given numbers. If at least one of the arguemets cannot be converted to a number, NaN is returned.
        
        //Because min() is a static method of Math, you always use it as Math.min(), rather than as a method of a Math object you created (Math is not a constructor).
            //If no arguments are given, the result is Infinity.
            //If at least one of arguments cannot be converted to a number the result is NaN

        //This finds the min of x and y and assigns it to z:
            var x = 10, y = -20;
            var z = Math.min(x, y);

        //Math.min() is often used to clip a value so that it is always less than or equal to a boundary.
            var x = f(foo);

            if (x > boundary) {
            x = boundary;
            }
            //may be written as this
            var x = Math.min(f(foo), boundary);

        //Math.max() can be used in a similar way to clip a value at the other end.

    
    //The *spread syntax* allows an expression to be expanded in places where multiple arguments (for function calls) or multiple elements (for array literals) or multiple variables  (for destructuring assignment) are expected.
        
        //Syntax:
            //For function calls:
                myFunction(...iterableObj);
            //For array literals:
                [...iterableObj, 4, 5, 6];
        
        //Example: it is common to use Function.prototype.apply in cases where you want to use an array as arguments to a function.