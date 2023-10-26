let $img = document.getElementById('img-header');

let $btns = document.querySelectorAll('.btn');
console.log($btns);

$btns[0].addEventListener('click', (e) => {
    $img.setAttribute('src', '../../assets/images/rick.png');
});

$btns[1].addEventListener('click', (e) => {
    $img.setAttribute('src', '../../assets/images/southpark.jpg');
});

$btns[2].addEventListener('click', (e) => {
    $img.setAttribute('src', '../../assets/images/futurama.jpg');
}); 