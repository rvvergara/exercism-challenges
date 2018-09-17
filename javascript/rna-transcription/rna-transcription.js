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