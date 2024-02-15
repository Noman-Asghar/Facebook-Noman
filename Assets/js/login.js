let userEmail = prompt("Enter_your_email");
let userPass = prompt("Enter_your_password");

let email = document.getElementById('email');
let pass = document.getElementById('password');
let loginBtn = document.getElementById('login');
let  link = document.getElementById('link');


loginBtn.addEventListener('click', function(){

if (userEmail === email.value && userPass === pass.value) {
    
    alert('login sucsessful')
    link.href ="/profile.html"
}

else if(userEmail !== email.value && userPass !== pass.value){

    alert('wrong information')
 }

else if (userEmail !== email.value) {
    alert("wrong email")
}

else if (userPass !== pass.value) {
    alert("wrong password")
}


});