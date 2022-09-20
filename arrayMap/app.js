
  
//   const arr =[2,5,10]

//   const result = arr.map(x => x * 2)
  
//   console.log(result)


  
//   const stringItUp = [2, 5, 100] // ["2", "5", "100"]

//   const result = stringItUp.map(num => {
//     return String(num);
//   } )
//   console.log(result)



  
//   const capitalizeNames = ["john", "JACOB", "jinGleHeimer", "schmidt"]; 
  
//   const result = capitalizeNames.map(names =>{
//         return names.toUpperCase()
//   })

//   console.log(result)





  
// const namesOnly = [
//     {
//         name: "Angelina Jolie",
//         age: 80
//     },
//     {
//         name: "Eric Jones",
//         age: 2
//     },
//     {
//         name: "Paris Hilton",
//         age: 5
//     },
//     {
//         name: "Kayne West",
//         age: 16
//     },
//     {
//         name: "Bob Ziroll",
//         age: 100
//     }
// ]

// const result = namesOnly.map(name =>{
//     return name.name
// })

// console.log(result)




// filter



  
//  const fiveAndGreaterOnly = [3, 6, 8, 2]; /// [6, 8]

//  const result = fiveAndGreaterOnly.filter(greater => greater>5)

//  console.log(result)
  



// const evensOnly = [3, 6, 8, 2]; /// [6, 8, 2]
  
// const result = evensOnly.filter(even => even% 2===0)

// console.log(result)





//   const fiveCharactersOrFewerOnly = ["dog", "wolf", "by", "family", "eaten", "camping"]; // ["by", "dog", "wolf", "eaten"]
  

//   const result = fiveCharactersOrFewerOnly.filter(word => word.length <= 5);

//   console.log(result)




// const peopleWhoBelongToTheIlluminati = [
//     { name: "Angelina Jolie", member: true },
//     { name: "Eric Jones", member: false },
//     { name: "Paris Hilton", member: true },
//     { name: "Kayne West", member: false },
//     { name: "Bob Ziroll", member: true }];

// const result = peopleWhoBelongToTheIlluminati.filter(member => member == true)

// console.log(result)






const ofAge = [
    { name: "Angelina Jolie", age: 80 },
    { name: "Eric Jones", age: 2 },
    { name: "Paris Hilton", age: 5 },
    { name: "Kayne West", age: 16 },
    { name: "Bob Ziroll", age: 100 }]

const result = ofAge.filter(ofAge => age > !!17)
console.log(result)
