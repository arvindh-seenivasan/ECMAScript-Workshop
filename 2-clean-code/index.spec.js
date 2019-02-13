const {calculateFinalPrice} = require('./index.js');

it('should print the receipt', () => {
  const purchasedItems = [
    { name: 'Apple', type: 'fruit', price: 150 },
    { name: 'Cornflakes', type: 'cereal', price: 50 },
    { name: 'Cauliflower', type: 'vegetable', price: 70 }
  ];

  expect(calculateFinalPrice(purchasedItems)).toEqual(283);
});