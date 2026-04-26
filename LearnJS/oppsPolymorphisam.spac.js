class A{

printmessage(){
    console.log("This is simple methode from parent")

}

add(n1,n2){
    console.log(n1+n2);
}
}

class B extends A{

printmessage(){
    console.log("This issimple methode from child")

}
add (n1,n2, n3){
    console.log(n1+n2+n3);
}   
}
// const obj = new B();
// obj.printmessage();  // methode overriding
// obj.add(10,20);  // methode overloading

 

const obj = new A();
obj.printmessage();  // methode overriding

obj.add(10,20,30);  // methode overloading