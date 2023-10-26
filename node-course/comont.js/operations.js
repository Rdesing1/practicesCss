let sum = (num1, num2) => {
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        return 'Error al realizar la operacion';
    }
    return num1 + num2;
}

let resta = (num1, num2) => {
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        return 'Error al realizar la operacion';
    }
    return num1 - num2;
}

module.exports = {
    sum,
    resta
}