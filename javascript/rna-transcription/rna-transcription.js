// Recursive solution
export function toRna(DNA) {
    let complement = {
        G: "C",
        C: "G",
        T: "A",
        A: "U"
    };
    if (DNA === "") return "";
    if (complement[DNA[0]] === undefined) throw new Error('Invalid input DNA.');
    return complement[DNA[0]] + toRna(DNA.substr(1));
}

// For loop solution

export function toRna(DNA) {
  let complement = {
      G: "C",
      C: "G",
      T: "A",
      A: "U"
    },
    RNA = "";
  if (DNA === "") return "";
  for (let i = 0; i < DNA.length; i++) {
    if (complement[DNA[i]] === undefined) throw new Error("Invalid input DNA.");
    RNA += complement[DNA[i]];
  }
  return RNA;
}
