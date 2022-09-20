

// var xhr = new XMLHttpRequest()
// // method  // url                     // async?
// xhr.open("GET", "https://swapi.dev/api/people/1/", true)
// xhr.send()

// xhr.onreadystatechange = function(){
// if(xhr.readyState === 4 && xhr.status === 200){
// const JSONdata = xhr.responseText
// const data = JSON.parse(JSONdata)
// console.log(data)
// }
// }

const XMLHttpRequest = require("xhr2");  

var xhr = new XMLHttpRequest();
// method  // url                     // async?
xhr.open("GET", "https://swapi.dev/api/people/", true);
xhr.send();
xhr.onreadystatechange = function () {
  if (xhr.readyState === 4 && xhr.status === 200) {
    const JSONdata = xhr.responseText;
    const data = JSON.parse(JSONdata);
    console.log(data);
  }
};