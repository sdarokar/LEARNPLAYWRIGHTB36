class A{

M1(){
    console.log("M1 method of class A");    
}
M2(){
    console.log("M2 method of class A");    
}
M3(){
    console.log("M3 method of class A");    
}


}

class B extends A{
    M4(){
        console.log("M4 method of class B");
    }   
    M5(){
        console.log("M5 method of class B");
    }

    M6(){
        console.log("M6 method of class B");
    }
}

const obj1 = new B()
obj1.M1() // from class A

obj1.M6() // from class B


//Mulitilevel Inheritance

class C extends B{
    M7(){
        console.log("M7 method of class C");
    }   
    M8(){
        console.log("M8 method of class C");
    }

    M9(){
        console.log("M9 method of class C");
    }
}

const obj2 = new C()
obj2.M1() // from class A
obj2.M4()
obj2.M7()