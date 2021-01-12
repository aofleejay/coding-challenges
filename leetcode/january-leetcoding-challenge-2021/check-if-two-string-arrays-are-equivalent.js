/**
 * @param {string[]} word1
 * @param {string[]} word2
 * @return {boolean}
 */
var arrayStringsAreEqual = function (word1, word2) {
  return flatten(word1) === flatten(word2)
}

var flatten = function (strArr) {
  return strArr.reduce((str, item) => str + item, '')
}
