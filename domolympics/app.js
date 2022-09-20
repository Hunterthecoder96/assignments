var header = document.querySelector ("#header")
header.textContent = "JavaSript Made This!!"
header.innerHTML += "<h3><span>Skully</span> wrote the JavaScript</h3>"
document.querySelectorAll("span").forEach(function(node){
    node.ondblclick=function(){
        var val=this.innerHTML;
        var input=document.createElement("input");
        input.value=val;
        input.onblur=function(){
            var val=this.value;
            this.parentNode.innerHTML=val;
        }
        this.innerHTML="";
        this.appendChild(input);
        input.focus();
    }
});
header.style.fontWeight = "800"
header.style.fontSize = "18px"
var theme = "theme-one"
var slector = document.querySelector('#theme-drop-down')
document.addEventListener('input', function (event) {
    theme = event.target.value
    if (event.target.value === 'theme-one') {
        console.log(event.target.value)
        document.querySelectorAll(".right").forEach(function(node){
            console.log(node)
           node.style.backgroundColor =  "lightblue"
     
        }); 
        document.querySelectorAll(".left").forEach(function(node){
            node.style.backgroundColor =  "burlywood"
            node.style.color = "black"
         });
     };

    if (event.target.value === 'theme-two') {
        document.querySelectorAll(".right").forEach(function(node){
            node.style.backgroundColor =  "red"
      
         }); 
         document.querySelectorAll(".left").forEach(function(node){
             node.style.backgroundColor =  "black"
             node.style.color = "white"
       
          });
      };

}, false);
var clear = document.getElementById('clear-button')
clear.onclick = function clear() {
    console.log("l")
    document.querySelector(".messages").innerHTML = ""
}
var send = document.getElementById('send-message')
send.onclick = function send() {
   let tx = '<div class="message right">' + document.getElementById("input").value + "</div>"
   
    if (document.querySelectorAll('.message').length % 2 === 0) {
        tx = '<div class="message left">' + document.getElementById("input").value + "</div>"
    } 
    document.querySelector(".messages").innerHTML += tx
    if (theme === 'theme-one') {
        document.querySelectorAll(".right").forEach(function(node){
            console.log(node)
           node.style.backgroundColor =  "lightblue"
     
        }); 
        document.querySelectorAll(".left").forEach(function(node){
            node.style.backgroundColor =  "burlywood"
            node.style.color = "black"
         });
     };

    if (theme === 'theme-two') {
        document.querySelectorAll(".right").forEach(function(node){
            node.style.backgroundColor =  "red"
      
         }); 
         document.querySelectorAll(".left").forEach(function(node){
             node.style.backgroundColor =  "black"
             node.style.color = "white"
       
          });
      };
}