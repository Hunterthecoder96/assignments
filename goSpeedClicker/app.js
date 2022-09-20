// const submit = document.querySelector.button

// setInterval(function(){
//     submit.addEventListener
// })

function sayHello(){
    console.log('hello!');
 }
 
 
 function stopSayingHello(){
    clearInterval(intervalID)
 }
 
 
 var intervalID = setInterval(sayHello, 1000);
 
 setTimeout(stopSayingHello,  6000)
 
 