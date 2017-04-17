// Challenge #4: Create a function that takes a number and returns 'even' if even and 'odd' if odd.

//My answer
 function isEvenOrOdd(num) {
     if (num % 2 === 0){
        return 'even';
    }else{
        return 'odd';
    }
 }

 //Most popular answer:
 function isEvenOrOdd(num) {
  return num % 2 ? 'odd' : 'even';
}