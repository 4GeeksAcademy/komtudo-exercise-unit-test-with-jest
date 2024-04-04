// Importar la función sum del archivo app.js
const { sum, fromDollarToYen } = require('./app.js');

// Comienza tu primera prueba
test('adds 14 + 9 to equal 23', () => {
    // Dentro de la prueba llamamos a nuestra función sum con 2 números
    let total = sum(14, 9);

    // Esperamos que la suma de esos 2 números sea 23
    expect(total).toBe(23);
});



test("One euro should be 1.07 dollars", function() {
    // Importo la funcion desde app.js
    const { fromEuroToDollar } = require('./app.js');

    // Uso la función como debe ser usada
   // const dollars = fromEuroToDollar(3.5);
    const dollars = fromEuroToDollar(3.5);


    // Si 1 euro son 1.07 dólares, entonces 3.5 euros debe ser (3.5 * 1.07)
    const expected = 3.5 * 1.07;

    // Hago mi comparación (la prueba)
    expect(fromEuroToDollar(3.5)).toBe(3.745); // 1 euro son 1.07 dólares, entonces 3.5 euros deberían ser = (3.5 * 1.07)
})


test ("One euro should be 156.5 yes", function() {
    const {fromDollarToYen} = require('./app.js');
    const yens = fromDollarToYen(10);
    const expected = 10 * 156.5;
    expect(fromDollarToYen(10)).toBe(1565);

})
test ("One euro should be 0.87 yes", function() {
    const {fromYenToPound} = require('./app.js');
    const yens = fromYenToPound(10);
    const expected = 10 * 0.87;
    expect(fromYenToPound(10)).toBe(8.7);
})