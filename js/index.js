let $spanReferences = document.getElementById('span');

let $a = document.createElement('a');
let $textEnlace = document.createTextNode('github');


$a.setAttribute('href','https://github.com/Rdesing1');
$a.setAttribute('target','_blanck');
$a.appendChild($textEnlace);

$a.style.color = '#fff';
$a.style.backgroundColor ='blue';
$a.style.padding = '3px';
$a.style.display = 'inline-block';
$a.style.borderRadius = '5px';
$a.style.marginTop = '2px';

$spanReferences.appendChild($a);