export default function score(str) {
    let [values, score] = [{
        1: "AEIOULNRST",
        2: "DG",
        3: "BCMP",
        4: "FHVWY",
        5: "K",
        8: "JX",
        10: "QZ"
    }, 0];

    [...str.toUpperCase()].forEach(x => {
        for (let val in values) {
            values[val].includes(x) ? score += Number(val) : undefined;
        }
    });
    return score;
}