const record = [
    { year: "1969", result: "peanut"},
    { year: "1968", result: "N/A"},
    { year: "1967", result: "N/A"},
    { year: "1966", result: "L"},
]

const year = record.find(superbowlWin).year;

function superbowlWin(outcome) {
    return outcome.result === 'peanut';
}

console.log(year);

