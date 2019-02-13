const discountAvailableAt = 300;
const discountPercent = 0.1;

const taxes = {
    fruit: 0.2,
    vegetable: 0.1
};

const defaultTax = 0.15;

const getTaxPercent = type => taxes[type] || defaultTax;
const getTaxAmount = ({ type, price }) =>
    getTaxPercent(type) * price;

const applyDiscount = total =>
    total > discountAvailableAt
        ? total - (discountPercent * total)
        : total;

const calculateTotal = list => list.reduce(
    (acc, listItem) => acc + listItem.price + getTaxAmount(listItem),
    0
);

const pipeline = fns => initialValue => fns.reduce((acc, fn) => fn(acc), initialValue)

module.exports = pipeline([
    calculateTotal,
    applyDiscount,
    Math.round
]);