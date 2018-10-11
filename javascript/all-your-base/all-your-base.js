export default class Converter {
  constructor() {}

  convert(numArr, baseFrom, baseTo) {
    //   1. Throw error if necessary
    this.handleError(numArr, baseFrom, baseTo);

    // 2. Check first if origin base is 10 then simply just convert to targe base
    return baseFrom === 10
      ? this.fromBase10(numArr, baseTo)
      : //   3. If original base isn't 10 then first convert to base 10 then convert to target base
        baseTo === 10
        ? this.toBase10(numArr, baseFrom)
        : this.fromBase10(this.toBase10(numArr, baseFrom), baseTo);
  }

  fromBase10(arr, newBase) {
    //   Function that converts a decimal number into any base
    let num = Number(arr.join("")),
      converted = [num % newBase],
      res = parseInt(num / newBase);
    while (res != 0)
      (num = res),
        (res = parseInt(num / newBase)),
        converted.unshift(num % newBase);
    return converted;
  }

  toBase10(arr, oldBase) {
    //   Function to convert from any base into decimal
    return arr
      .map((n, i, a) => n * oldBase ** (a.length - 1 - i))
      .reduce((a, b) => a + b)
      .toString()
      .split("")
      .map(s => Number(s));
  }

  handleError(numArr, baseFrom, baseTo) {
    //   Check errors arising from original base input
    if (baseFrom < 2 || baseFrom === undefined || !Number.isInteger(baseFrom))
      throw new Error("Wrong input base");
    //   Check errors arising from target base input
    if (baseTo < 2 || baseTo === undefined || !Number.isInteger(baseTo))
      throw new Error("Wrong output base");
    //   Check errors arising from wrong input array
    if (
      numArr.length == 0 ||
      (numArr.length > 1 && numArr[0] === 0) ||
      numArr.some(x => x < 0) ||
      (baseFrom == 2 && numArr.some(x => x > 1))
    )
      throw new Error("Input has wrong format");
  }
}
