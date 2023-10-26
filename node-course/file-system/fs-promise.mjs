import { readFile } from "node:fs/promises";

readFile('./hola.txt', 'utf-8', (err, text) => {

}).then(console.log(text));
