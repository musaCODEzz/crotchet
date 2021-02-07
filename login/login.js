// function toggleInput(){
//     var passwordInput = document.getElementById('password');
//     if(passwordInput.type === "password"){
//         passwordInput.type = 'text';
//     }else{
//         passwordInput.type = "password";
//     }
// } //This fuction was only meant for toggling password visisbility without changing the class

const togglePassword = document.querySelector("#eye");
const password = document.querySelector("#password");

togglePassword.addEventListener('click', function(e){
    const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
    password.setAttribute('type',type);

    this.classList.toggle('fa-eye-slash');
})