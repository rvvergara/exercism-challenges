export default class Raindrops {
  constructor() {}
  convert(num) {
    let [magicNumbers, outputStr] = [
      { 3: "Pling", 5: "Plang", 7: "Plong" },
      ""
    ];
    for (let magic in magicNumbers) {
      if (num % magic === 0) outputStr += magicNumbers[magic];
    }
    return outputStr === "" ? String(num) : outputStr;
  }
}
