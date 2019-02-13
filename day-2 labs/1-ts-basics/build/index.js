"use strict";
exports.__esModule = true;
exports.buildName = function (firstName, lastName) {
    if (lastName)
        return firstName + ' ' + lastName;
    return firstName;
};
exports.repeatString = function (str, count) {
    var final = '';
    for (var i = 0; i < count; i++) {
        final += str;
    }
    return final;
};
exports.isEven = function (num) { return num % 2 === 0; };
exports.calorieString = function (food, calories) {
    return "Our " + food + " has " + calories + " calories.";
};
exports.ageString = function (_a) {
    var name = _a[0], age = _a[1];
    return name + " is " + age + " years old.";
};
