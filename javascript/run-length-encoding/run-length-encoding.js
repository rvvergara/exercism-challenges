export function encode(str) {
  let encodeStr = "";
  let key = str[0];
  let counter = 0;
  for (let i = 0; i < str.length; i++) {
    if (key === str[i]) {
      counter++;
      if (i + 1 === str.length) {
        counter === 1 ? (encodeStr += key) : (encodeStr += counter + key);
      }
    } else {
      counter === 1 ? (encodeStr += key) : (encodeStr += counter + key);
      counter = 0;
      key = str[i];
      i--;
    }
  }
  return encodeStr;
}
export function decode(str) {
  let numbers = "";
  let decodeSTR = "";
  for (let i = 0; i < str.length; i++) {
    if (/^\d+$/.test(str[i])) {
      numbers += str[i];
    } else {
      let num = numbers === "" ? 1 : parseInt(numbers);
      for (let j = 0; j < num; j++) {
        decodeSTR += str[i];
      }
      numbers = "";
    }
  }
  return decodeSTR;
}
