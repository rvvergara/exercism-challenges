function toRoman(num) {
    let roms = {
            1: "I",
            4: "IV",
            5: "V",
            9: "IX",
            10: "X",
            40: "XL",
            50: "L",
            90: "XC",
            100: "C",
            400: "CD",
            500: "D",
            900: "CM",
            1000: "M"
        },
        output = "",
        divs = [],
        div;
    // 1. Determine if num is already in roms,if it is then we're done
    if (num in roms) return roms[num];
    // 2. Find which key in roms will be the divisor for num that will give a quotient of less than 5 but greater than 1
    for (let rom in roms)
        if (num / rom < 5 && num / rom > 1) divs.push(rom);
    div = Math.max(...divs);
    // 3. Find the remainder, if any then deduct the remainder from num to get first character of output
    let remainder = num % div;
    let difference = num - remainder;
    // 4. If difference is already in roms then add roms[difference] to output
    if (difference in roms) output += roms[difference];
    // 5. Else, it means we need to have to print the first character multiple times, this multiple is equal to the difference divided by the div 
    else {
        let times = difference / div;
        for (let i = 0; i < times; i++) output += roms[div];
    }
    // 6. if remainder is zero then we just simply return output
    if (remainder === 0) return output;
    else return output + toRoman(remainder);
}

export default toRoman;