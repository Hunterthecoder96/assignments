/**
 * QUIZ:
 * 
 * 1. Why do programmers care about loops? What are they good for?
 * Allow a programmer to run the same code many times.
 * 
 * 2. In a for loop, what are the 3 main parts that go into the parentheses?
 * 
 * 
 * 3. Write a loop that logs the numbers 15 to 50 (inclusive) to the console.
 * 
 * 
 * 4. Write a loop that logs the numbers 0 to 10 (inclusive) to the console, but if the number is 7, also log "It's your lucky day!"
 */

// for (/*1. initialize vairables, 2. condition - should I run one more time?, 3. final code that we want to run at the end of the loop*/) {
//     ...
// }

// for(var i = 15; i <= 50; i++) {
//     console.log(i)
// }

for(var i = 0; i <= 10; i++) {
    console.log(i)
    if(i === 7) {
        console.log("It's your lucky day!")
    }
}

// Review - Arrays and Loops






/* QUIZ
    1. What part of the for loop will allow you to access each individual item in an array?
        for(var i = 0;)
        numbersArr[i]
    
    2. What part of the for loop will need the array's length in order to run the correct amount of iterations?
        for(var i = 0; i < array.length)
    
    3. Using the pets array, how would you write a for loop to console.log all of the pets with an "s" added to the end? Your console log's should be ( cats, dogs, birds, snakes, rabbits )
    
    4. Using the numbers array, how would you write a for loop to console log only the odd numbers?
    
    5. Using the users array, how would you write a for loop that would console log the following sentence for each user in the array. ("Hi, I am joe and I am 30 years old")
    
    6. Using the pets array, how would you write a for loop that would console.log all the pets in
    reverse order?
    
*/

// 3. 
    // for(var i = 0; i < petsArr.length; i++){
    //     console.log(petsArr[i] + "s")
    // }
    
// 4.
// var numbersArr = [23, 64, 20, 33, 40, 100, 30, 50, 2]

//     for(var i = 0; i < numbersArr.length; i++){
//         if(numbersArr[i] % 3 === 0){
//             console.log(numbersArr[i])
//         }
//     }

var users = [
    {
        name: "joe",
        age: 30,
    },
    {
        name: "steve",
        age: 23
    },
    {
        name: "sarah",
        age: 39
    },
    {
        name: "lisa",
        age: 27
    }
]

// "Hi, I am joe and I am 30 years old"
// 5.
    // for(var i = 0; i < users.length; i++){
    //     console.log("Hi, I am " + users[i].name + " and I am " + users[i].age + " years old")
    // }
    
// 6.
var petsArr = ["cat", "dog", "bird", "snake", "rabbit"]
    for(var i = petsArr.length - 1; i >= 0; i--){
        console.log(petsArr[i])
    }