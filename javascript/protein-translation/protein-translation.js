const translation = {
    Methionine: ["AUG"],
    Phenylalanine: ["UUU", "UUC"],
    Leucine: ["UUA", "UUG"],
    Serine: ["UCU", "UCC", "UCA", "UCG"],
    Tyrosine: ["UAU", "UAC"],
    Cysteine: ["UGU", "UGC"],
    Tryptophan: ["UGG"],
    STOP: ["UAA", "UAG", "UGA"]
};

const handleError = () => {
    throw new Error("Invalid codon");
}

const translate = (rna = "") => {
    const [rnaSubstr, output] = [rna.substr(0, 3), []];

    if (rnaSubstr.match(/[^ACGU]/g)) handleError();

    if (rna === "" || translation["STOP"].includes(rnaSubstr)) return [];

    for (let protein in translation) {
        translation[protein].includes(rnaSubstr) ? output.push(protein) : undefined;
    }

    return output.concat(translate(rna.substr(3)));

}

export default translate;