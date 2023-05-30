// var people = ["Jon", "Jacob", "Jingle", "Heimer", "Schmidt"]
// var alphabet = "abcdefghijklmnopqrstuvwxyz"

// var conCat= people.concat(alphabet)
// console.log(conCat)


function employee (name, job, salary) {
    
    this.name = name;
    this.job =job;
    this.salary = salary;
}
var bob = new employee("Bob", "instructor", "50/hr")
var hunter = new employee("Hunter", "pimp", "1,000/trick")
 
console.log(hunter.job)