const findTheOldest = function (person) {
    return person.reduce((oldest, current) => {
        const oldestAge = setAge(oldest.yearOfBirth, oldest.yearOfDeath);
        const currentAge = setAge(current.yearOfBirth, current.yearOfDeath)
        return oldestAge < currentAge ? current : oldest;
    });
};
const setAge = function (birth, death) {
    if (!death) {
        death = new Date().getFullYear();
    }
    return death - birth;
}



// Do not edit below this line
module.exports = findTheOldest;
