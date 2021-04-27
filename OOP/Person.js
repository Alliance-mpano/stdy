function Person(name){
    this.name=name
    this.greeting=function(){
        console.log("HI I am "+this.name)
    }
}
let alliance= new Person("Alliance");
alliance.greeting()