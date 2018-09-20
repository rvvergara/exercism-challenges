// For Loop Solution
export function validate(num) {
    let n = Math.log(num) * Math.LOG10E + 1 | 0,
        beg = num,
        output = 0,
        divisor = Math.pow(10, n - 1),
        remainder = num % divisor;
    for (let i = n; i > 0; i--) {
        let divisor = Math.pow(10, i - 1),
            remainder = beg % divisor,
            digit = (beg - remainder) / divisor;
        output += Math.pow(digit, n);
        beg = remainder;
    }
    return output === num;
}

// Recursive solution
export let validate2 = num => extract(num) === num;

function extract(num, arg1) {
    let n = Math.log(num) * Math.LOG10E + 1 | 0,
        exp = arg1 === undefined ? n : arg1,
        divisor = Math.pow(10, n - 1),
        remainder = num % divisor,
        digit = (num - remainder) / divisor;

    return remainder === 0 ? Math.pow(digit, exp) : Math.pow(digit, exp) + extract(remainder, exp);
}

validate(153);
validate2(153);