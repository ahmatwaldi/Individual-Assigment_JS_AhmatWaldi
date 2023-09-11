window.onscroll = function(){
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;
    if(window.pageYOffset > fixedNav){
        header.classList.add('navbar-fixed')
    }else{
        header.classList.remove('navbar-fixed')
    }
}
// humberger
const hamburger = document.querySelector('#hamburger')
const navMenu = document.querySelector('#nav-menu')

hamburger.addEventListener('click',
function(){
    hamburger.classList.toggle('hamburger-active')
    navMenu.classList.toggle('hidden')

})

const user={
    username: 'admin',
    password: 'admin',
}

const usernameElm = document.querySelector('#username')
const passwordElm = document.querySelector('#password')
const btnLoginElm = document.querySelector('#btn_login')


btnLoginElm.addEventListener('click',
function(){
    const username = usernameElm.value
    const password = passwordElm.value
    
    if((username !=="")&&(password !=="")){
        if((username === user.username)&&(password === user.password)){
            window.location.href = "home.html";
        }else{
            alert('username dan password salah')
        }
    }else{
        alert("masukan username dan passsword")
    }
    event.preventDefault();
})
