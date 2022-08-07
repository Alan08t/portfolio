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

console.log(altura, distancia)

  })
}

{
  


const typed = new Typed('.typed', {
    strings: ["<i class='second-p-js'>Lorem ipsum dolor sit amet consectetur adipisicing elit Reiciendis corrupti eum, illo distinctio impedit, sed harum ratione asperiores, molestiae dolorum hic quas officiis quia! Saepe et velit laudantium minus! Quia assumenda ratione labore porro aliquid reiciendis ipsum, sapiente tempora magnam similique laborum repellendus commodi autem, quisquam officiis aperiam earum, expedita animi odit? Harum cum expedita odio molestias dolorum molestiae quia veniam veritatis?.</i>"]

});

}

{


let navMenu = document.querySelector(".nav-menu");

document.querySelectorAll('.btn-menu').forEach(item => {
    item.addEventListener('click', event => {
        navMenu.classList.toggle("nav-menu-visible");
    })
})
}