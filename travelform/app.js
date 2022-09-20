const form = document.getElementById('person')

const submit =document.getElementById('submit')




const popUp = function(e){
    
    e.preventDefault()

   var firstName =form["firstName"].value;
   var lastName = form["lastName"].value;
   var age = form["age"].value;
   var location= form["location"].value;
   var gender = [''];
   if(form['male'].checked){
    gender = 'Male';
    }
   if(form['female'].checked) {
    gender = "Female";
   }
   console.log('gender',gender)
   alert("\nName:" + firstName + ' ' + lastName + "\nage: " + age + "\nDestination: " + location + "\nGender: " + gender);
    
}
submit.addEventListener('click',popUp);