import math

fileIn = open('double-squares.in', 'r')
fileOut = open('double-squares.out', 'w')
fileContent = fileIn.read().splitlines()
T = fileContent.pop(0)

for i, X in enumerate(fileContent):
  count = 0
  X = int(X)
  if X == 0:
    fileOut.write('Case #'+ str(i+1) + ': 1\n')
  elif X == 1:
    fileOut.write('Case #'+ str(i+1) + ': 1\n')
  elif X == 2:
    fileOut.write('Case #'+ str(i+1) + ': 1\n')
  elif X == 3:
    fileOut.write('Case #'+ str(i+1) + ': 0\n')
  else:
    bound = int(math.sqrt(X))
    for A in range(0, bound+1):
      for B in range(A, bound+1):
        if A * A + B * B > X:
          break
        if A * A + B * B == X:
          count=count+1
    fileOut.write('Case #'+ str(i+1) + ': ' + str(count) + '\n')
fileIn.close() 
fileOut.close() 
