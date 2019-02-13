import printPaymentType from './';

it('should print the payment type for cash', () => {
  expect(printPaymentType({ type: 'cash' })).toEqual('Paid in cash');
});

it('should print the payment type for cheque', () => {
  expect(
    printPaymentType({ type: 'cheque', chequeNumber: 1234567 })
  ).toEqual('Paid by cheque number: 1234567');
});

it('should print the payment type for card', () => {
  expect(
    printPaymentType({
      type: 'card',
      card: {
        type: 'Master',
        number: '4242424242424242'
      }
    })
  ).toEqual('Paid by Master card: 4242424242424242');
});
