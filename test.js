// Importar la función sum del archivo app.js
const { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound } = require('./app.js');

// Comienza tu primera prueba
test('adds 14 + 9 to equal 23', () => {
    let total = sum(14, 9);
    expect(total).toBe(23);
});

test("One euro should be 1.07 dollars", function() {
    const dollars = fromEuroToDollar(3.5);
    const expected = 3.5 * 1.07;
    expect(fromEuroToDollar(3.5)).toBe(3.745);
})

test ("One euro should be 156.5 yes", function() {
    const yens = fromDollarToYen(10);
    const expected = 10 * 156.5;
    expect(fromDollarToYen(10)).toBe(1565);

})
test ("One euro should be 0.87 yes", function() {
    const yens = fromYenToPound(10);
    const expected = 10 * 0.87;
    expect(fromYenToPound(10)).toBe(8.7);
})