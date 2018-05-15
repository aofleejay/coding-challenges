f = open('studious-student.in', 'r')
N = f.readline()
lines = f.readlines()

for index, line in enumerate(lines):
  line = line.split()
  M = int(line.pop(0))
  words = line
  for i in range(0, M):
    for j in range(i + 1, M):
      wordI = words[i] + words[j]
      wordJ = words[j] + words[i]
      if wordI > wordJ :
        words[i], words[j] = words[j], words[i]
  print("Case #{}: {}".format(index + 1, ''.join(words)))
