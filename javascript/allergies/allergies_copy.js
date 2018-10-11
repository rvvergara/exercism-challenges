const foods = [
  "eggs",
  "peanuts",
  "shellfish",
  "strawberries",
  "tomatoes",
  "chocolate",
  "pollen",
  "cats"
];

export default class Allergies {
  constructor(num) {
    this.num = num;
  }
  list() {
    const scores = foods.map((f, i) => 2 ** i),
      total = scores.reduce((a, b) => a + b),
      num = this.num > total ? this.num - total - 1 : this.num,
      validScores = scores.filter(s => num - s >= 0),
      resultant = validScores.filter(s => num - s >= 0);
    return n <= 0
      ? []
      : foods.map((f, i) => resultant.includes(2 ** i)).reverse();
  }
  allergicTo(str) {
    return this.list().includes(str);
  }
}
