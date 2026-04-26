class employee{

    X= 45  //non static variable 
    static y = 20  //static variable 

    m1(){
        console.log("This is a simple method1")
    }
  static m2(){
        console.log("This is a simple method2")
    }
  m3(){
        console.log("This is a simple method3")
    }

  static m4(){
        console.log("This is a simple method4")
    }

}

employee.m2()

const emp = new employee()
emp.m1()