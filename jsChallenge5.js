//Challenge #5: Create a function that accepts a Date object, and returns true if it's Christmas Eve (December 24th) and false otherwise. Keep in mind JavaScript's Date month is 0 based, meaning December is the 11th month while January is 0.
    
    //My solution:
    function timeForMilkAndCookies(date) {
        var xmasEveDate = date.getDate();
        var xmasEveMonth = date.getMonth();
        if (xmasEveDate == 24, xmasEveMonth == 11){
            return true;
        }else{
            return false;
        }
    }

    //Most popular answer:
    function timeForMilkAndCookies(date) {
    return date.getMonth() === 11 && date.getDate() === 24;
    }


//Notes:
    
    //The getDate() method returns the day of the month for the specified date according to local time.
        dateObj.getDate()
        //The return value is an integer number between 1 and 31.

        //The second statement below assigns the value 25 to the variable day, based on the value of the Date object Xmas95.
            var Xmas95 = new Date('December 25, 1995 23:15:30');
            var day = Xmas95.getDate();

            console.log(day); // 25
        // Date Syntax
            new Date();
            new Date(value);
            new Date(dateString);
            new Date(year, month[, date[, hours[, minutes[, seconds[, milliseconds]]]]]);

    //The getMonth() method returns the month in the specified date according to local time, as a zero-based value (where zero indicates the first month of the year).
        dateObj.getMonth()
        //The return value is an integer number, between 0 and 11, representing the month in the given date according to local time. 0 corresponds to January, 1 to February, and so on.

        //The second statement below assigns the value 11 to the variable month, based on the value of the Date object Xmas95.
            var Xmas95 = new Date('December 25, 1995 23:15:30');
            var month = Xmas95.getMonth();

            console.log(month); // 11
