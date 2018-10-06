export function isPangram(str) {
    let alphabet = 'abcdefghijklmnopqrstuvwxyz';
    return str === "" ? false : alphabet.split("").every(x => str.toLowerCase().includes(x));
}