let $open = document.getElementById('open'); // the navbar
let $close = document.getElementById('close');
let $nav_container = document.getElementById('nav-container');

$open.addEventListener('click', (e) => {
    /*cambiamos el hamburguer por el close */
    $open.style.transform = 'scale(0)';
    $close.style.transform = 'scale(1)';
    $nav_container.style.display = 'flex';

    $nav_container.classList.remove('hidden');
});

$close.addEventListener('click', (e) => {
    $close.style.transform = 'scale(0)';
    $open.style.transform = 'scale(1)';
    $nav_container.classList.add('hidden');
});