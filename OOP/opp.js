function createNewPerson(name){
    var obj={}
    obj.name=name;
    obj.greeting=function(){
        console.log("Hi! I am " +obj.name+".")
    }
     return obj;
}
var alliance= new createNewPerson("alliance");
alliance.greeting();
// console.log(alliance)
