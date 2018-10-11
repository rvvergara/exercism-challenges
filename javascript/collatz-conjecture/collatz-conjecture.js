export let steps = num => {
    if (num === 1) return 0;
    if (num <= 0) throw new Error("Only positive numbers are allowed")
    num % 2 === 0 ? num = num / 2 : num = num * 3 + 1;
    return 1 + steps(num);
}