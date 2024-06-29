const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');
const signUpForm = document.getElementById('signupForm'); 
const signInForm = document.getElementById('signinForm'); 

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});

signInForm.addEventListener('submit', (e) => {
    e.preventDefault(); // Menghentikan default form submission
    // Ganti URL berikut dengan URL tujuan Anda setelah sign-in
    window.location.href = 'https://lokergenz.github.io/Home/'; 
});
