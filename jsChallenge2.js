//Challenge #2: Create a function that accepts an array and returns the last item in the array. The array can contain any of the Javascript's 5 primitive data types (Number, strings, boolean, undefined, null)
        
//My answer:
    function getLastItem(arr) {
        var lastItem = arr.pop();
        return lastItem;
    }
//Most Popular Answer(s):
    function getLastItem(arr) {
    return arr[arr.length - 1]  //.length - 1 returns the last item in the array.
}

    function getLastItem(arr) {
    return arr.pop();
    }


//Notes:
//Array number is iterated through by looking at the length property. The value in each element is then doubled.
    var numbers = [1, 2, 3, 4, 5];
    var length = numbers.length;
    for (var i = 0; i < length; i++) {
    numbers[i] *= 2;
    }
    // numbers is now [2, 4, 6, 8, 10]
    
//Shortens the array to a length of 3 if the current length is greater than 3.
    var numbers = [1, 2, 3, 4, 5];

    if (numbers.length > 3) {
    numbers.length = 3;
    }

    console.log(numbers); // [1, 2, 3]
    console.log(numbers.length); // 3

//Types of ways to write shorter functions (arrow functions)
        var materials = [
    'Hydrogen',
    'Helium',
    'Lithium',
    'Beryllium'
    ];

    var materialsLength1 = materials.map(function(material) { 
    return material.length; 
    }); //8,6,7,9

    var materialsLength2 = materials.map((material) => {
    return material.length;
    }); //8,6,7,9

    var materialsLength3 = materials.map(material => material.length); //8,6,7,9

//Creates the myFish array containing four elements, then removes the last element.
    var myFish = ['angel', 'clown', 'mandarin', 'sturgeon'];

    var popped = myFish.pop();

    console.log(myFish); // ['angel', 'clown', 'mandarin' ] 

    console.log(popped); // 'sturgeon'
