import re
import string
import functools

f = open('beautiful-strings.in', 'r')
N = f.readline()
sentences = f.readlines()
alphabetList = list(string.ascii_lowercase)
for index, sentence in enumerate(sentences):
  unique = []
  onlyAlphabetSentence = re.sub(r"[^A-Za-z]+", '', sentence.lower())
  for letter in alphabetList:
    if onlyAlphabetSentence.count(letter):
      unique.append(onlyAlphabetSentence.count(letter))
  unique.sort(reverse=True)
  count = 26
  su = 0
  for i, v in enumerate(unique):
    su += v * (26 - i)
  print("Case #{}: {}".format(index + 1, su))
