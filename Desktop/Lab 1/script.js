






//contact.html
const firstname = document.getElementById('first-name')
const lastname = document.getElementById('last-name')
const email = document.getElementById('email')
const phone = document.getElementById('phone-number')
const message = document.getElementById('message')
const form = document.getElementById('contact-form')

var FirstNameError = document.getElementById('first-name-error')
var LastNameError = document.getElementById('last-name-error')
var EmailError = document.getElementById('email-error')
var MessageError = document.getElementById('message-error')


form.addEventListener('submit', (e)=> {
    e.preventDefault();

    validateName();
    validateEmail();
    
})



function validateName(){
    if (firstname.value.trim() === "" || lastname.value.trim()=== "" 
    || !isNaN(firstname.value) || !isNaN(lastname.value))
    { alert ("You must enter a value!")}
}

function validateEmail(){
    if (!email.value.includes("@")){
        alert("Enter a valid email!");
    }

}