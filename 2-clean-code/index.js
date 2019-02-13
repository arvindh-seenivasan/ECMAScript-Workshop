// module.exports = list => {
//   let returnVal = 0;
//
//   for(var i = 0; i < list.length; i++) {
//     returnVal += list[i].price;
//
//     // Calculate taxes
//     if(list[i].type === 'fruit') {
//       returnVal += 0.2 * list[i].price;
//     } else if(list[i].type === 'vegetable') {
//       returnVal += 0.1 * list[i].price;
//     } else {
//       returnVal += 0.15 * list[i].price;
//     }
//   }
//
//   // Offer discounts
//   if(returnVal > 300) {
//     returnVal -= 0.1 * returnVal;
//   }
//
//   returnVal = Math.round(returnVal);
//
//   return returnVal;
// };


module.exports.calculateFinalPrice = items => {
  let finalPrice = 0;
  finalPrice = calculateTotalPrice(items);
  finalPrice = applyDiscount(finalPrice);
  return finalPrice;
};

const calculateTotalPrice = items => {

  return items.reduce((total,{price,type}) => {
    return total += (price + calculateTax(price,type));
  },0)

};

const taxes = {
  fruit : 0.2,
  vegetable : 0.1
};
const defaultTaxPercentage = 0.15;
const getTaxPercentage = itemType => taxes[itemType] || defaultTaxPercentage;
const calculateTax = (price,type) => {
  return (price * getTaxPercentage(type))

};

const applyDiscount = totalPrice => totalPrice > 300 ? Math.round(totalPrice -= 0.1 * totalPrice) : Math.round(totalPrice);


// for future reference of currying :

const pipeline = functions => initialValue => functions.reduce((acc,fn) => fn(acc),initialValue);