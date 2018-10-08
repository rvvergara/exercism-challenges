let transform = old => {
    let newWay = {};
    for (let score in old) {
        old[score].forEach(letter => {
            newWay[letter.toLowerCase()] = Number(score);
        });
    }
    return newWay;
}

export default transform;