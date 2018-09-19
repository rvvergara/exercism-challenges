export function validate(num) {
    let n = Math.log(num) * Math.LOG10E + 1 | 0,
        beg = num,
        output = 0,
        divisor = Math.pow(10, n - 1),
        remainder = num % divisor;
    for (let i = n; i > 0; i--) {
        let divisor = Math.pow(10, i - 1),
            remainder = beg % divisor;
        output += Math.pow((beg - remainder) / Math.pow(10, i - 1), n);
        beg = num % Math.pow(10, i - 1);
    }
    return output === num;
}