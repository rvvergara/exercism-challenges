function Hamming() {};

Hamming.prototype.compute = function (str1, str2) {
    let count = 0;
    if (str1.length !== str2.length) throw new Error('left and right strands must be of equal length');
    for (let i = 0; i < str1.length; i++) {
        str1[i] !== str2[i] ? count++ : undefined;
    }
    return count;
}

export default Hamming;