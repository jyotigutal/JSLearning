
var leapYear = function(year) {
    if(year %4==0 && year%100 !=0 || year%400 ==0){
        console.log(`The ${year} is a leap year`);
    }
    else{
        console.log(`The ${year} is a not leap year`);
    }
    
}

leapYear(2020);
leapYear(1999);
leapYear(1600);
leapYear(2022);
leapYear(1945);
leapYear(null);
leapYear("Twenty Twenty");
leapYear(undefined);
leapYear(NaN);
leapYear(1750);