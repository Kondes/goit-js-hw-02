//Напиши функцию checkForSpam(message), принимающую 1 параметр message - строку.
//  Функция проверяет ее на содержание слов spam и sale. Если нашли зарещенное
//   слово то функция возвращает true, если запрещенных слов нет функция
//   возвращает false. Слова в строке могут быть в произвольном регистре.
// const spamSaleWords = ['spam', 'sale'];
const checkForSpam = function (message) {
  const includeSpamSale=
    message.toLowerCase().includes('spam') ||
    message.toLowerCase().includes('sale');
  return includeSpamSale;
};

console.log(checkForSpam('Latest technology news')); 

console.log(checkForSpam('JavaScript weekly newsletter')); 

console.log(checkForSpam('Get best sale offers now!')); 

console.log(checkForSpam('[SPAM] How to earn fast money?')); 
