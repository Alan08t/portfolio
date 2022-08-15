{
    
window.addEventListener('scroll', function () {

const nav = document.querySelector('.nav-bar');
var altura = this.window.innerHeight;
var distancia = nav.getBoundingClientRect().top;


if (distancia < altura){
    nav.classList.add('show-nav-bar')
}

else {
    nav.classList.remove('show-nav-bar')
}


  })
}



{


    const btnMenu = document.querySelector('.btn-menu');
    const navMenu = document.querySelector('.nav-menu');
    const navBar = document.querySelector('.nav-bar')


    btnMenu.addEventListener('click', toggleMenu);
    

    function toggleMenu() {
            navMenu.classList.toggle('nav-menu-visible');
            navBar.classList.toggle('nav-bar-desplegate')


    }
}