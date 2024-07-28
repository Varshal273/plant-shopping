let nav_logo_button = document.querySelector("iframe").contentDocument.getElementById('nav-logo');
let nav_nav_button = document.querySelector("iframe").contentDocument.getElementById('nav-plants');
let nav_signup_button = document.querySelector("iframe").contentDocument.getElementById('nav-signup');
let nav_login_button = document.querySelector("iframe").contentDocument.getElementById('nav-login');
let nav_cart_button = document.querySelector("iframe").contentDocument.getElementById('nav-cart');
let nav_logo_toggle = true;
let nav_nav_toggle = true;

setTimeout(() => {
    nav_logo_button = document.querySelector("iframe").contentDocument.getElementById('nav-logo');
    nav_nav_button = document.querySelector("iframe").contentDocument.getElementById('nav-plants');
    nav_signup_button = document.querySelector("iframe").contentDocument.getElementById('nav-signup');
    nav_login_button = document.querySelector("iframe").contentDocument.getElementById('nav-login');
    nav_cart_button = document.querySelector("iframe").contentDocument.getElementById('nav-cart');
    nav_logo_button.addEventListener('click',()=>{
        console.log('logo');
        if((window.location.pathname == 'https://varshal273.github.io//plant-shopping/buy.html') | (window.location.pathname == 'https://varshal273.github.io//plant-shopping/plants.html')){
            window.open('../plant-shopping/index.html','_self');
        }
        else{
            toggle();
            // window.open('/index.html','_self');
        }
    });
    nav_nav_button.addEventListener('click',()=>{
        console.log('nav');
        // if((window.location.pathname != '/buy.html') | (window.location.pathname != '/plants.html')){
        //     start_load();
        // }
        // setTimeout(() => {
            window.open('../plant-shopping/plants.html','_self')
        // }, 2000);
        // document.querySelector('.lander-container-1').style.display = 'none';
        // document.querySelector('.container-2').style.display = 'none';
    });
    nav_signup_button.addEventListener('click',()=>{
        console.log('nav');
            window.open('../plant-shopping/signup.html','_self')
    });
    nav_login_button.addEventListener('click',()=>{
        console.log('nav');
            window.open('../plant-shopping/login.html','_self')
    });
    nav_cart_button.addEventListener('click',()=>{
        console.log('nav');
            window.open('../plant-shopping/cart.html','_self')
    });
}, 100);
function start_load(){}
function toggle(){
    if (nav_logo_toggle){
        document.querySelectorAll('iframe')[3].scrollIntoView({behavior: "smooth", block: "center", inline: "nearest" });
        nav_logo_toggle = false;
    }
    else if(!(nav_logo_toggle)){
        document.querySelectorAll('iframe')[2].scrollIntoView({behavior: "smooth", block: "end", inline: "nearest" });
        nav_logo_toggle = true;
    }
}