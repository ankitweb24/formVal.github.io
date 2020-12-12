let form = document.getElementById('form');
let user = document.getElementById('user');
let email = document.getElementById('email');
let password = document.getElementById('pass');
let cpassword = document.getElementById('cpass');





form.addEventListener('submit', (event)=>{
    event.preventDefault();
    formValidation();
})


function errorMsg(input, errormsg) {
     const control_form = input.parentElement;
     control_form.className = "form_control error_room";   
     const small = control_form.querySelector('small');
     small.innerText = errormsg;
     small.style.visibility = "visible";


}

function successMsg(input) {
    const control_form = input.parentElement;
    const small = control_form.querySelector('small');
    small.style.visibility = "hidden";
    control_form.className = "form_control success_room";
    

}


let formValidation = () =>{
    let userVal = user.value.trim();
    let emailVal = email.value.trim();
    let phoneVal = phone.value.trim();
    let passVal = password.value.trim();
    let cpassVal = cpassword.value.trim();


    //user validation
    if(userVal === ''){
        errorMsg(user , "please fill this field");
    }else if(userVal.length <= 2){
        errorMsg(user, 'at least 3 letters');
    }else{
        successMsg(user);
    }


    //email validation
    if(emailVal === ''){
        errorMsg(email , "please fill this field");
    }else{
        successMsg(email);
    }

    // phone
    if(phoneVal == ''){
        errorMsg(phone, "please fill this field");
    }else if(phoneVal.length <= 9){
        errorMsg(phone, 'enter the valid phone number');
    }else{
        successMsg(phone);
    }

    //password filed
    if(passVal == ''){
        errorMsg(password, 'please fill this field');
    }else if(passVal.length <= 4) {
        errorMsg(password, 'your password too short');
    }else{
        successMsg(password);
    }


    // confim password
    if(cpassVal == ''){
        errorMsg(cpassword, 'please fill this field');
    }else if(passVal === cpassVal){
        successMsg(cpassword);
    }else{
        errorMsg(cpassword, 'your password are not matched');
    }
    
} 
