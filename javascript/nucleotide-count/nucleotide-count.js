const NucleotideCounts = {};

NucleotideCounts.parse = function (str) {
  const [dna, output] = [
    ["A", "C", "G", "T"],
    [0, 0, 0, 0]
  ];

  [...str].forEach(x => {
    dna.includes(x) ?
      output[dna.indexOf(x)]++
      :
      x === "" ?
      undefined :
      handleErr();
  });

  return output.join(" ");
};

function handleErr() {
  throw new Error("Invalid nucleotide in strand");
}

export default NucleotideCounts;