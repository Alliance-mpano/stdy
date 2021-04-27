function HumanBeing(){
    this.name;
    this.greeting=()=>{
        console.log("Hi I am "+this.name)
    }
}
var alliance=new HumanBeing()
alliance.name="alliance"
alliance.greeting()