for(count=0;count<=30;++count){
 if(count%2==0){
     console.log("This number i.e "+count+" is even")
    }else if(count%2==1){
         console.log("This number i.e "+count+" is odd")
     }else{
         console.log("The program ends here")
     }
 }
 var day="Sunday"
 console.log("Showing timetable of the week");
 switch(day){
     case'Monday':console.log("Maths");
     break;
     case'Tuesday': console.log("Networking");
     break;
     case'Wednesday':console.log("FoP");
     break;
     case'Thursday':console.log("English");
     break;
     case'Friday':console.log("Physics");
     break;
     default:console.log("Not schoolday")
 }
 console.log("Finished")
 for(count=0;count<=10;count++){
    if(count%2==0){
        console.log("number "+count+ " is even")
    }else{
        console.log("number "+count+ " is odd")
    }
}