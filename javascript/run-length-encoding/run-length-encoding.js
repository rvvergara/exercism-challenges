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

export function encode_recursive(str) {
  let key = str[0],
    count = 0,
    output = "";
  if (str.length === 0) return "";
  for (let i = 0; i < str.length + 1; i++) {
    if (str[i] === key) count++;
    else {
      // it should stop counting and result in the key printed by count times
      count === 1 ? (output += key) : (output = output + count + key);
      let next = encode(str.substr(i)); //recursively call encode on the next substring after first consecutive pattern
      return next === undefined ? output : output + next;
    }
  }
}

export function decode_recursive(str) {
  let numStr = "",
    output = "";
  if (str.length === 0) return "";
  for (let i = 0; i < str.length; i++) {
    if (str[i].match(/\d/g)) numStr += str[i];
    else {
      numStr === "" ? (numStr += "1") : undefined;
      let times = Number(numStr);
      for (let j = 0; j < times; j++) output += str[i];
      let next = decode(str.substr(i + 1));
      return next === undefined ? output : output + next;
    }
  }
}
