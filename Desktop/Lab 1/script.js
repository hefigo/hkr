
//contact.html
const firstname = document.getElementById('first-name')
const lastname = document.getElementById('last-name')
const email = document.getElementById('email')
const phone = document.getElementById('phone-number')
const message = document.getElementById('message')
var charcount = document.getElementById('message-counter')
const form = document.getElementById('contact-form')

var FirstNameError = document.getElementById('first-name-error')
var LastNameError = document.getElementById('last-name-error')
var EmailError = document.getElementById('email-error')



message.addEventListener("input", function(){
    const text = message.value;
    const count = text.length;
    charcount.textContent = "Character Count: " + count
})

form.addEventListener('submit', (e)=> {
    e.preventDefault();

    validateName();
    validateEmail();
    validateMessage();
    
})

function showError(element, message){
    element.textContent = message;

}
function clearError(element){
    element.textContent = "";
}



function validateName(){
    if (firstname.value.trim() === "" || lastname.value.trim()=== "" 
    || !isNaN(firstname.value) || !isNaN(lastname.value))
    { showError(FirstNameError, "Please enter your name!")}
    else {
        clearError(FirstNameError);
    }
}

function validateEmail(){
    if (!email.value.includes("@")){
        showError(EmailError, "Please enter your email!");
    }
    else {
        clearError(EmailError);
    }

}

function validateMessage(){
    if (message.value.length < 20){
        alert ("Must type at least 20 characters!")
    }
    
}
