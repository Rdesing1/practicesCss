import { readFile } from 'node:fs';
// de forma sincrona:

console.log('------primera ejecucion del programa lector de archivos------');

readFile('list.txt', 'utf-8', (err, text) => {
    if (err) {
        console.log('Ha ocurrido un problema' + err);
    }
    console.log('text mas largo:..', text);
});


readFile('./hola.txt', 'utf-8', (err, text) => {
    console.log('primera Ejecucion', text);
});

console.log('----------------Sequimos Ejecutando-------------');


