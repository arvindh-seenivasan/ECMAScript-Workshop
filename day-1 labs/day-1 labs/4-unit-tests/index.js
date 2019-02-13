module.exports.add = (a,b) => {
    let result;
    isNaN(a) || isNaN(b) ? result = null : result =  a+b;
    return result
};

module.exports.sub = (a,b) => {
    let result;
    (isNaN(a) || isNaN(b) && ! (a > b)) ? result = null : result =  a - b;
    return result
};