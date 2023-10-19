let $btnMode = document.getElementById('btn-mode');
let $span = document.getElementById('span');
let $inputs = document.querySelectorAll('.input');

$btnMode.addEventListener('click',(e)=>{
    if($span.classList.contains('left')){
        $span.classList.remove('left');
        $span.classList.add('right');
        $btnMode.style.backgroundColor='yellow';
        document.body.style.backgroundColor = '#fff';
        document.body.style.color ='#222';
       
        $inputs.forEach(Element =>{
            Element.style.backgroundColor = '#fff';
            Element.style.borderBottom = 'thin solid #222'
        });

        getIconSol($span);

    }else{
        $span.classList.remove('right');
        $span.classList.add('left');
        $btnMode.style.backgroundColor='#222'
        document.body.style.backgroundColor = '#222'
        document.body.style.color = '#fff'
        $btnMode.style.backgroundColor='grey'

        $inputs.forEach(Element =>{
            Element.style.backgroundColor = '#222';
            Element.style.borderBottom = 'thin solid #fff'
            
        });
        getIconluna($span);
    }
});



function getIconSol($span){
    $span.textContent = 'light_mode';
}

function getIconluna($span){
    $span.textContent = 'dark_mode';
}