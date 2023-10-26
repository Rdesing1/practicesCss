let $btn = document.getElementById('btn');
let $input = document.getElementById('input');
let $referenceUL = document.querySelector('.ul');

let listItems = document.querySelectorAll('li');
console.log(listItems)
$btn.addEventListener('click', (e) => {
    e.preventDefault();
    if ($input.value != '') {
        let $textnode = document.createTextNode($input.value);
        let $li = document.createElement('li');

        $li.appendChild($textnode);
        $referenceUL.appendChild($li);
        $li.classList.add('li');

    } else {
        alert(`error`);
    }

});

listItems.forEach(Element => {
    Element.addEventListener('dblclick', (e) => {
        let res = confirm('seguro que desea eliminar la task?');
        if (res) {
            Element.remove();
        } else {
            alert('casi la lias!')
        }
    });
});

