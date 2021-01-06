function getVowels(str) {
  var vowels = [];
  if (str.match(/[aeiou]/gi)) {
    vowels.push(str.match(/[aeiou]/gi));
  }
  return vowels.toString().replace(/,/g, "");
}


