class student{

    x =45

   institute = "DBS QA Tech"

    printstudentname(){

        console.log("student name : John")
        console.log("institute name : " + this.institute)
    }

    printstudentcoursename(){
        console.log(" course name : Playwright")
        console.log(this.institute)
    }

printstudentplace(){

    this.printstudentname()
    console.log(" student place : USA") 
}
}

const stu = new student()
stu.printstudentname()
stu.printstudentcoursename()
stu.printstudentplace()

console.log(stu.institute)