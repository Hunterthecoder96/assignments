function largestNumber( ...numbers) {
    let highestNumber =numbers[0]
    for (var i = 0; i< numbers.length; i++) {
    
        if(numbers[i]>highestNumber) {
            highestNumber = numbers[i]
        }
    }
    return highestNumber
}
console.log(largestNumber(3, 8, 11))

