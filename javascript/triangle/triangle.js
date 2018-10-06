// 1. [Check if all sides val is pos ]a, b,c > 0 Means positive value
// 2. [Check if sum of any two sides is equal or greater than 3rd ]Rules => a + b >= c || b + c >= a || a + c >= b
// 3. Check if a === b === c return equilateral
// 4. Check if a === b || b===c || a === c return isosceles
// 5. Check if a != b && a != c && b != c return isosceles

export default class Triangle {
  constructor(a, b, c) {
    [this.a, this.b, this.c] = [a, b, c];
  }
  kind() {
    let [a, b, c] = [this.a, this.b, this.c];
    checkLegality(a, b, c);
    return a === b && b === c
      ? "equilateral"
      : (a === b && b !== c) || (b === c && c !== a) || (c === a && a !== b)
        ? "isosceles"
        : "scalene";
  }
}

function checkLegality(a, b, c) {
  if ([a, b, c].some(x => x <= 0) || a + b < c || b + c < a || c + a < b)
    throw new Error();
}
