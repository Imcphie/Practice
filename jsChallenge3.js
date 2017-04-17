//Challenge #3: Create a function that takes a string and replaces every meantion of any type of sausage with the German word 'Wurst'
//unless the sausage already contains the word 'Wurst', return the Wurst-ified string.

    function wurstIsBetter(str) {
       newStr = str.replace(/notWurst/i, 'Wurst');
       return newstr;
    }
    var notWurst = ['kielbasa', 'chorizo', 'moronga', 'salami', 'sausage', 'andouille', 'naem', 'merguez', 'gurka', 'snorkers', 'pepperoni']

//Notes:

//*Regular expressions* are patterns used to match character combinations in strings. In JavaScript, regular expressions are also objects. 
    //These patterns are used with the exec and test methods of RegExp, and with the match, replace, search, and split methods of String. 
    
    //You construct a regular expression in one of two ways:
        
        //Using a regular expression literal, which consists of a pattern enclosed between slashes
            var re = /ab+c/; //When the regular expression will remain constant, use this for better performance.
        
        //Or calling the constructor function of the RegExp object:
            var re = new RegExp('ab+c'); //Use the constructor function when you know the regular expression pattern will be changing, or you don't know the pattern and are getting it from another source, such as user input.
        
    //Simple pattens are constructed for characters for which you only want a direct match. For example the pattern /abc/ matches character combinations in strings only when exactly the charactrs 'abc' occur.
        /ab*c/ //would match 'slabcraft' but not 'Grab Crab'

//The replace() method returns a new string with some or all matches of a pattern replaced by a replacement. The pattern can be a string or a RegExp, and the replacement can be a string or a function to be called for each match.
    str.replace(RegExp|substr, newSubstr|function)

    //Parameters
        //RegExp(pattern): A RegExp object or literal. The match or matches are replaced with newSubStr or the value returned by the specified function.
        //substr(pattern): A String that is to be replaced by newSubStr. It is treated as a verbatim string and is not interpreted as a regular expression. Only the first occurrence will be replaced.
        //newSubstr(replacement): The String that replaces the substring specified by the specified regexp or substr parameter.
        //function(replacement): A function to be invoked to create the new substring to be used to replace the matches to the given regexp or substr.

    //Example will set newString to 'abc - 12345 - #$*%':
        function replacer(match, p1, p2, p3, offset, string) {
        // p1 is nondigits, p2 digits, and p3 non-alphanumerics
        return [p1, p2, p3].join(' - ');
        }
        var newString = 'abc12345#$*%'.replace(/([^\d]*)(\d*)([^\w]*)/, replacer);
        console.log(newString);  // abc - 12345 - #$*%

    //The regular expression is defined in replace() and includes the ignore case flag.
        var str = 'Twas the night before Xmas...';
        var newstr = str.replace(/xmas/i, 'Christmas');
        console.log(newstr);  // Twas the night before Christmas...

    //Global replace can only be done with a regular expression. In the following example, the regular expression includes the global and ignore case flags which permits replace() to replace each occurrence of 'apples' in the string with 'oranges'.
        var re = /apples/gi;
        var str = 'Apples are round, and apples are juicy.';
        var newstr = str.replace(re, 'oranges');
        console.log(newstr);  // oranges are round, and oranges are juicy.

//The map() method creates a new array with the result of calling a provided function on every element in this array.
    var numbers = [1, 5, 10, 15];
    var roots = numbers.map(function(x) {
    return x * 2;
    });
    // roots is now [2, 10, 20, 30]
    // numbers is still [1, 5, 10, 15]

    var numbers = [1, 4, 9];
    var roots = numbers.map(Math.sqrt);
    // roots is now [1, 2, 3]
    // numbers is still [1, 4, 9]

    //Syntax
        var new_array = arr.map(callback[, thisArg])

    //Parameters:
        //Callback: Function that produces an element of a new Array, taking three arguements:
            //currentValue: The current element being processed in the array.
            //index: The index of the current element being processed in the array.
            //array: The array map was called on.
        //thisArg: Optional. Value to use as this when executing callback.