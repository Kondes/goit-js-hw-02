// Напиши фукцнию findLongestWord(string), которая принимает параметром
// произвольную строку (в строке будут только слова и пробелы) и возвращает
// самое длинное слово в этой строке.

const findLongestWord = function (string) {
  const words = string.split(' ');
  let longWord = string[0];
  for (let i = 0; i < words.length; i += 1) {
    if (words[i].length > longWord.length) {
      longWord = words[i];
    }
  }
  return longWord;
};

console.log(findLongestWord('The quick brown fox jumped over the lazy dog'));

console.log(findLongestWord('Google do a roll'));

console.log(findLongestWord('May the force be with you'));
