function reverseString(s) {
  let newString = "";
  for (let i = s.length - 1; i > -1; i--) {
    newString += s[i];
  }
  return newString;
}

export default reverseString;
