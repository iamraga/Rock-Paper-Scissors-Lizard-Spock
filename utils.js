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

export const DECISION = {
    1: "Win",
    2: "Draw",
    3: "Lose"
};

export const calling = function() {
    console.log(RESULTS[CHOICE.ROCK][CHOICE.SPOCK]);
}