
//single level inheritance 
// multi level inheritance
// hierarchy inheritance

class A{
    a=200;
    display(){
        console.log(this.a);
    }
}

class B extends A{
    b=300;
    show(){
        console.log(this.b);
    }
}


  bobject = new B();
 bobject.display();
 bobject.show();







