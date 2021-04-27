
    alert(document.body.innerHTML)

function changeFieldColorOnFocus(){
    
    document.getElementById("names").style.backgroundColor='green';
}
function getPersonInfo(){
    var names = document.getElementById("names").value
    
    var email = document.getElementById("email").value
    alert(document.body.innerHTML)
   
    //console.log("Details entered are names:"+names+" email:"+email)
    console.log(`Details entered are names:${names} email:${email}`)
}