function getFormvalue() {
    //Write your code here
var form = document.getElementById("form1");

  // Get the values of the first and last name inputs
  var firstName = form.fname.value;
  var lastName = form.lname.value;

  // Display the values using alert
  alert("First name: " + firstName + "\nLast name: " + lastName);
}
