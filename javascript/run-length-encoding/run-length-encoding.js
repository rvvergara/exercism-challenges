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

// Recursive versions

export function encode_recursive(str, arg1 = 1) {
  let count = arg1,
    output = "";
  if (str === "") return "";
  if (str[1] === str[0]) count++;
  else {
    count === 1 ? (output += str[0]) : (output += count + str[0]);
    count = 1;
  }
  return output + encode(str.substr(1), count);
}

export function decode_recursive(str, arg1 = "") {
  let numStr = arg1,
    output = "";
  if (str === "") return "";
  if (str[0].match(/\d/)) numStr += str[0];
  else {
    if (numStr === "") numStr = "1";
    for (let i = 0; i < Number(numStr); i++) output += str[0];
    numStr = "";
  }
  return str.substr(1) !== undefined
    ? output + decode(str.substr(1), numStr)
    : output;
}
