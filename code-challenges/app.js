// removeVowels("I have never seen a thin person drinking Diet Coke.")

// removeVowels("We're gonna build a wall!")
// ➞ "W'r gnn bld  wll!"

// removeVowels("Happy Thanksgiving to all--even the haters and losers!")
// ➞ "Hppy Thnksgvng t ll--vn th htrs nd lsrs!"


function removeVowels(str) {
    const vowels = ["a", "A", "e", "E", "i", "I", "o", "O", "u", "U"]
    strArray = str.split("")
    newStr = strArray.filter(letter => !vowels.includes(letter))
    return newStr.join("")
}
console.log(removeVowels("I have never seen a thin person drinking Diet Coke."))
console.log(removeVowels("We're gonna build a wall!"))
console.log(removeVowels("Happy Thanksgiving to all--even the haters and losers!"))


//return all objects that are not vowels
//take out vowels
