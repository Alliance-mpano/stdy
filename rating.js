function rates(){
    var schools=document.getElementsByTagName("p") 
    for(i=0; i<schools.length;i++){
        console.log(schools[i])
        var schoolName = schools[i].innerText
        if(schoolName=="RCA"){
            document.getElementById("bestSecondary").innerHTML = schoolName
            document.getElementById("bestSecondary").style.color = "red"
        } else if(schoolName=="CMU"){
           document.getElementById("bestVast").innerHTML = schoolName
           document.getElementById("bestVast").style.backgroundColor="crimson"
  }else{
            console.log("None")
        }
    }
}