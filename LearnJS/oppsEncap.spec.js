// 1. Encapsulation

//Binding the data between the methode
//Setter and Getter

class Student {

    stuname
    stuplace
    stucourse 


getstudentdetails(name,place,course){
    this.stuname = name
    this.stuplace = place
    this.stucourse = course
}
printstudentdetails(){
    console.log(this.stuname)
    console.log(this.stuplace)
    console.log(this.stucourse) 
}
}

const stu1 = new Student()
stu1.getstudentdetails("Ravi","Chennai","MCA") // setter SET the data
stu1.printstudentdetails() // getter GET the data