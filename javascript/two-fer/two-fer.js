let twoFer = name => {
    let other;
    name === undefined || name.length === 0 ? other = "you" : other = name;
    return `One for ${other}, one for me.`;
}

export default twoFer;