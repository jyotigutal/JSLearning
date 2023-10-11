

class College{
    name
    address
    rating
    course
    constructor(name,address,rating,course){
        this.name = name;
        this.address = address;
        this.rating = rating;
        this.course = course;
    }
    display(){
        console.log(`College details : ${this.name},${this.address},${this.rating},${this.course}`);
    }
}


const collegeCOEP = ["COEP Technological University","Pune","AAAA+","M.E"];
//   console.log(collegeCOEP);

