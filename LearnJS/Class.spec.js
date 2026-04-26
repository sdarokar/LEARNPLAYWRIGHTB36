 export class calculator{
 x = 2
 studentName = "John"
y =20
constructor(){
    console.log("This is a constructor")
}

add(num1, num2){
    console.log(num1 + num2)
}

substarct(num1, num2){
    console.log(num1 - num2)
}
multiply(num1, num2){
    console.log(num1 * num2)    
}
divide(num1, num2){
    console.log(num1 / num2)        
}
printMesage(){
    console.log("This is a simple Method")
}
}

const cal = new calculator()
cal.add(10, 20)
cal.substarct(20, 10)
cal.multiply(10, 20)
cal.divide(20, 10)
cal.printMesage()

//export default calculator