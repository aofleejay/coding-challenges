from collections import Counter

f = open('alphabet-soup.in', 'r')
T = f.readline()
sentences = f.readlines()

for index, sentence in enumerate(sentences):
  sentence = ''.join([letter for letter in sentence if letter in 'HACKERCUP'])
  frequency = Counter(sentence)
  frequency['C'] = frequency['C'] / 2
  values = list(frequency.values())
  if (len(values) != 8): 
    print("Case #{}: 0".format(index + 1))
  else:
    print("Case #{}: {}".format(index + 1, min(values)))
