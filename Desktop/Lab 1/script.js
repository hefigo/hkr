
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

var personalMessage = document.getElementById('personalized-message')

message.addEventListener("input", function(){
    const text = message.value;
    const count = text.length;
    charcount.textContent = count + "/20 Characters "

    if (count<20){
        charcount.style.color = "red"
    }
    else{
        charcount.style.color = "green";
    }
})

function sayThankyou(){
    personalMessage.textContent = "Thank you, " + firstname.value + ", for your message!";

    setTimeout(function(){
        personalMessage.textContent = ""
    }, 3000)
}

form.addEventListener('submit', (e)=> {
    e.preventDefault();

    const namevalid = validateName()
    const emailvalid = validateEmail()
    const messagevalid = validateMessage()

    if (validateName() && validateEmail() && validateMessage()) {
        sayThankyou()
        form.reset() // i think this is easier than making a new function
    }
    
})

function showError(element, message){
    element.textContent = message

}
function clearError(element){
    element.textContent = "";
}



function validateName(){
    let valid = true

    if (firstname.value.trim() === "" || lastname.value.trim()=== "" 
    || !isNaN(firstname.value) || !isNaN(lastname.value))
    {
        showError(FirstNameError, "Please enter your name!");
        firstname.style.borderColor = "red"
        valid = false

    }
    else {
        clearError(FirstNameError);
        firstname.style.borderColor = ""
    }

    if (lastname.value.trim() === "" || !isNaN(lastname.value.trim()))
    {
        showError(LastNameError, "Please enter your last name!");
        lastname.style.borderColor = "red"
        valid = false

    }
    else {
        clearError(LastNameError);
        lastname.style.borderColor = ""
    }

    return valid 



}

function validateEmail(){
    if (!email.value.includes("@")){
        showError(EmailError, "Please enter your email!");
        email.style.borderColor = "red"
        return false
    }
    else {
        clearError(EmailError);
        email.style.borderColor = ""
        return true
    }
    

}

function validateMessage(){
    if (message.value.length < 20){
        alert ("Must type at least 20 characters!")
        message.style.borderColor = 'red'
        return false
    }
    else{
        message.style.borderColor = ""
        return true
    }
    
}
