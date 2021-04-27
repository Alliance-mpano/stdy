function learnDOM(){
    var classA = document 
    .childNodes[0]//html 
    .childNodes[1]//body
     .childNodes[0]//div 
     .childNodes[3] 
    // console.log("Out put:"+classA.innerHTML)
      console.log("Out put nodeName:"+classA.nodeName) 
      console.log("Out put nodeName parent:"+classA.parentNode.nodeName)
       //type 
      console.log("Out put nodetype:"+classA.nodeType) 
      console.log("Out put nodeName text:"+classA.childNodes[0].nodeType) 
      console.log("Out put nodetype parent:"+classA.parentNode.nodeType)
       console.log("Out put nodetyp html:"+document.childNodes[0].nodeType)
        } 
        function parent(){
            var kidNode = document.getElementById("div2");

console.log("The parent node is "+kidNode.parentNode)
        }
