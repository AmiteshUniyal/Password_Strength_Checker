const password=document.getElementById("password");
const message=document.getElementById("message");
const strength=document.getElementById("strength");
const submitButton=document.querySelector("button");

password.addEventListener("input", () => {
    const passwordValue = password.value;
    const passwordLength = passwordValue.length;

    let strengthValue = "";

    const hasUpperCase = /[A-Z]/.test(passwordValue);
    const hasLowerCase = /[a-z]/.test(passwordValue);
    const hasNumbers = /\d/.test(passwordValue);
    const hasSpecialChars = /[!@#$%^&*(),.?":{}|<>]/.test(passwordValue);

    if (passwordLength === 0) {
        strengthValue = '';
    } else if (passwordLength < 8) {
        strengthValue = 'Weak';
    } else if (passwordLength >= 8 && passwordLength <= 12) {
        if ((hasUpperCase || hasLowerCase) && hasNumbers) {
            strengthValue = 'Medium';
        } else {
            strengthValue = 'Weak';
        }
    } else if (passwordLength > 12) {
        if (hasUpperCase && hasLowerCase && hasNumbers && hasSpecialChars) {
            strengthValue = 'Very Strong';
        } else if ((hasUpperCase || hasLowerCase) && hasNumbers) {
            strengthValue = 'Strong';
        } else {
            strengthValue = 'Medium';
        }
    }

    strength.textContent = strengthValue;
    message.style.display = 'block';
});


submitButton.addEventListener("click",function(){
    const passwordAttribute =password.getAttribute("type");
    if(passwordAttribute === 'password'){
        password.setAttribute("type","text")
    }else{
        password.setAttribute("type",'password');
    }
})