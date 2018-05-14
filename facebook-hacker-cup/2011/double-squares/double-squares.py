import math

f = open('double-squares.in', 'r')
N = f.readline()
numbers = f.readlines()

for i, X in enumerate(numbers):
  count = 0
  X = int(X)
  if X == 0:
    print("Case #{}: 1".format(i + 1))
  else:
    bound = int(math.ceil(math.sqrt(X / 2)))
    for A in range(0, bound):
      B = math.sqrt(X - (A * A))
      if B == math.floor(B):
        count = count + 1
    print("Case #{}: {}".format(i + 1, count))
f.close() 
