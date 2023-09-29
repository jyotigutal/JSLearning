

var voteEligible = function(age){
    var result = +age;
    if(age == 0 || age <= -1 || age > 130 || age==null){
        console.log(`Invalid data : ${age}`);
    }
    else{
        if (age < 18) {
            console.log(`Hey your age ${age} is not eligible for vote`);
            
        } else {
            console.log(`Hey your age ${age} is eligible for vote`);
        }
    }

}

voteEligible(45);
console.log(`===========================================`);
voteEligible(17);
console.log(`===========================================`);
voteEligible(8);
console.log(`===========================================`);
voteEligible(20);
console.log(`===========================================`);
voteEligible(-10);
console.log(`===========================================`);
voteEligible(200);
console.log(`===========================================`);
voteEligible(0);
console.log(`===========================================`);
voteEligible(undefined);
console.log(`===========================================`);
voteEligible(null);