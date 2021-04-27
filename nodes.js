var imgnodeToAdd=document.createElement("img")
var nodeToAdd=document.createElement("p")
imgnodeToAdd.setAttribute("border","1")
nodeToAdd.setAttribute("class","regular")
var newTxt=document.createTextNode("Hello")
nodeToAdd.appendChild(newTxt)
var parentDiv=document.getElementById("div1").innerHTML;
var newParagraph=document.createElement("p");
var t=document.createTextNode("Hello world");
newParagraph.appendChild(t);
function addNodes(){
    parentDiv.appendChild("newParagraph");  
}

