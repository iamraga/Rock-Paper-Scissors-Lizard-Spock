import RESULTS from './results';

//ENUM implementation for player choices and results
export const CHOICE = {
    ROCK: 1,
    PAPER: 2,
    SCISSORS: 3,
    LIZARD: 4,
    SPOCK: 5
};

Object.freeze(CHOICE);

export const getKeyByValue = (object, value) => {
    return Object.keys(object).find(key => object[key] === value);
}
export const calling = function() {
    console.log(RESULTS[CHOICE.ROCK][CHOICE.SPOCK]);
}