module.exports = list => {
    let returnVal = 0;

    for(var i = 0; i < list.length; i++) {
        returnVal += list[i].price;

        // Calculate taxes
        if(list[i].type === 'fruit') {
            returnVal += 0.2 * list[i].price;
        } else if(list[i].type === 'vegetable') {
            returnVal += 0.1 * list[i].price;
        } else {
            returnVal += 0.15 * list[i].price;
        }
    }

    // Offer discounts
    if(returnVal > 300) {
        returnVal -= 0.1 * returnVal;
    }

    returnVal = Math.round(returnVal);

    return returnVal;
};
