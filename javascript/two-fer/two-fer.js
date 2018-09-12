export let twoFer = name => {
  let other;
  name === undefined || name.length === 0 ? (other = "you") : (other = name);
  return `One for ${other}, one for me.`;
};
export function twoFer2(name) {
  return name ? `One for ${name}, one for me.` : "One for you, one for me.";
}
