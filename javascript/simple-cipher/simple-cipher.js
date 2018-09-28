// Helper functions
function generateKey(str) {
  let text = "";
  for (let i = 0; i < 100; i++) {
    text += str.charAt(Math.floor(Math.random() * str.length));
  }
  return text;
}

function processKey(str, key) {
  if (key.length < str.length) {
    let diff = str.length - key.length,
      reps = Math.floor(diff / key.length),
      rem = diff % key.length;
    for (let i = 0; i < reps; i++) key += key;
    for (let i = 0; i < rem; i++) key += key[i];
  }
  return key;
}

// Constructor declaration
export function Cipher(key) {
  if ((key && key.match(/[^a-z]/g)) || key === "") throw new Error("Bad key");
  this.key =
    key === undefined ? generateKey("abcdefghijklmnopqrstuvwxyz") : key;
}

// Methods
Cipher.prototype.encode = function(str) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  return str
    .split("")
    .map((char, index) => {
      let key = processKey(str, this.key);
      let enc = char.charCodeAt(0) + alphabet.indexOf(key[index]);
      enc <= 122 ? undefined : (enc -= 26);
      return String.fromCharCode(enc);
    })
    .join("");
};

Cipher.prototype.decode = function(str) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  return str
    .split("")
    .map((char, index) => {
      let key = processKey(str, this.key);
      let enc = char.charCodeAt(0) - alphabet.indexOf(key[index]);
      enc >= 97 ? undefined : (enc += 26);
      return String.fromCharCode(enc);
    })
    .join("");
};
