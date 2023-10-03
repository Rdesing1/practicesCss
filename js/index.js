let $reference = document.getElementById('nav');

let $enlaces = [
    {
        name:'box-shadows',
        href:'#'
    }
]

$enlaces.forEach(Element =>{
    let $a = document.createElement('a');
    $a.appendChild(Element.name);
    $a.setAttribute('href',Element.href);

    $reference.appendChild($a);
})