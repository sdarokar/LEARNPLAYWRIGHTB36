marks = 30

if(marks>90 && marke<=100){
    console.log("Grade A+")  
}   
else if(marks>80 && marks<=90){
    console.log("Grade A")

}
else if(marks>35 && marks<=80){
    console.log("Grade B")

}
else {
    console.log("Fail")

}



switch("edge") {
    case "Chrome":{
        console.log("This is Chrome")
}
        break;
        case "Firefox":{
        console.log("This is Firefox")
        }

        break;
        case "Edge":{
        console.log("This is Edge")
        }
break
        default:{
        console.log("invalid browser")
        }
        break
    }