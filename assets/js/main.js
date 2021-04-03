const navMenu = document.getElementById('nav-menu'),
toggleMenu= document.getElementById('nav-toggle'),
closeMenu=document.getElementById('nav-close');

toggleMenu.addEventListener('click',()=>{
    navMenu.classList.toggle('show')
})

closeMenu.addEventListener('click',()=>{
    navMenu.classList.remove('show')
})

document.addEventListener("DOMContentLoaded",()=>{
    const loginForm=document.querySelector("#login");
    const createAccountForm=document.querySelector("#createAccount");

    document.querySelector("#linkCreateAccount").addEventListener("click",e=>{
    e.preventDefault();
    loginForm.classList.add("form-hidden")
    createAccountForm.classList.remove("form-hidden")
});
document.querySelector("#linkLogin").addEventListener("click",e=>{
e.preventDefault();
loginForm.classList.remove("form-hidden")
createAccountForm.classList.add("form-hidden")
});

});