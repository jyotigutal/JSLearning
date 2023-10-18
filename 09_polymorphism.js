

// polymorphism = many forms
//  polymorphism is the ability to create a variable, a function or an object that has more than one form

class shape{

    draw(){
        console.log(`this is a generic method`);
    }
}
class square extends shape{
    draw(){
        return `I am square`;
    }
}
class circle extends shape{
    draw(){
        return `I am circle`;
    }
}

let s = new shape();
s.draw();

s= new square();
console.log(s.draw());

s = new circle();
console.log(s.draw());