from collections import Counter

f = open('beautiful-strings.in', 'r')
m = f.readline()
sentences = f.readlines()

for index, sentence in enumerate(sentences):
  sentence = ''.join(letter for letter in sentence if letter.isalpha()).lower()
  sentenceDictionary = Counter(sentence)
  countAlphabet = list(sentenceDictionary.values())
  countAlphabet.sort()
  countAlphabet.reverse()
  countWithMultiply = zip(range(26, 0, -1), countAlphabet)
  result = sum(count * multiply for count, multiply in countWithMultiply)
  print("Case #{}: {}".format(index + 1, result))
