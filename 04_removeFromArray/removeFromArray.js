const removeFromArray = function (importedArray, ...toRemoveArguments) {
    const finalArray = importedArray.filter(item => !toRemoveArguments.includes(item));
    return finalArray;
};


// Do not edit below this line
module.exports = removeFromArray;
