let $enlacesSociales = document.querySelectorAll('.icon-social');

$enlacesSociales.forEach(Element =>{
    Element.addEventListener('mouseover',(e)=>{
        Element.style.color='#0275d8';
    },false);

    Element.addEventListener('mouseout',(e)=>{
        Element.style.color = '#ffffff';
    });

})

