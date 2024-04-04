// Contenido de app.js
//console.log("Hello Word");

// Esta es mi funcion
const sum = (a, b) => {
    return a + b;
}

// Sólo un registro en cosola para nosotros

//console.log(sum(5,7));


const fromEuroToDollar = function (valueInEuro) {
    let valueInDollar = valueInEuro * 1.07;
    return valueInDollar;
}

const fromDollarToYen = function (ValueInDollar) {
    let valueInYen = ValueInDollar * 156.5;
    return valueInYen;
}

const fromYenToPound = function (valueInYen) {
    let valueInPound = valueInYen * 0.87;

    return valueInPound;

}

module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound };




