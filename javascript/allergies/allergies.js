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
    let scores = foods.map((f, i) => 2 ** i),
      total = scores.reduce((a, b) => a + b),
      num = this.num > total ? this.num - total - 1 : this.num,
      validScores = scores.filter(s => num - s >= 0).reverse(),
      resultant = [];
    validScores.forEach(
      (s, i) => (num - s >= 0 ? (resultant.push(s), (num -= s)) : undefined)
    );
    return foods.filter((f, i) => resultant.includes(2 ** i));
  }
  allergicTo(str) {
    return this.list().includes(str);
  }
}
