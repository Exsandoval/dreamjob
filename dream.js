// WHen a user puts their info into the boxes it will send the information
//to our email for us to see
//0. check if there is any text in the input section
//1.read the text in the input sections
//2.send the info in an Email
//3. redirect back to website
//4.clear the input sections for next person

var emailInput,nameInput,dreamJobInput;
document.querySelector('.submit').addEventListener('click', function(){
  nameInput = document.getElementById('name').value;
if (nameInput) {
  console.log(nameInput);
}else{
  alert('missing name');
}
 //if (emailInput && nameInput && dreamJobInput) {
})
