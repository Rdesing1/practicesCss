let $enlacesSociales = document.querySelectorAll('.icon-social');
let $btnMenu = document.querySelector('.icon-burguer');
let $menu = document.querySelector('.ul-nav');


$enlacesSociales.forEach(Element =>{
    Element.addEventListener('mouseover',(e)=>{
        Element.style.color='#0275d8';
    },false);

    Element.addEventListener('mouseout',(e)=>{
        Element.style.color = '#ffffff';
    });

});


$btnMenu.addEventListener('click',(e)=>{
    if($menu.classList.contains('ul-nav')){
        $menu.classList.remove('ul-nav');
        $menu.classList.add('ul-nav-active');

    }else{
        $menu.classList.remove('ul-nav-active');
        $menu.classList.add('ul-nav');
    }
});

