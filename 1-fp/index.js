module.exports.getIndians = people => {
    return people.filter(({country}) => country === 'India')
};

module.exports.anyoneFromTN = people => {

    return people.some(({state}) => state === 'TN')
};

module.exports.adults = people => {

    return people.filter(({age}) => age >= 21)
};

module.exports.totalAges = people => {
    return people.reduce((a,b) => a + b.age,0)
};


