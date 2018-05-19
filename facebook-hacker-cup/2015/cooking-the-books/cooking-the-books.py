f = open('cooking-the-books.in', 'r')
T = f.readline()
nums = f.read().splitlines()

def swap(string, i, j):
    listSting = list(string)
    listSting[i], listSting[j] = listSting[j], listSting[i]
    return ''.join(listSting)

for index, num in enumerate(nums):
  arr = []
  arr.append(num)
  for i in range(0, len(num)):
    for j in range(i + 1, len(num)):
      if (not(i == 0 and num[j] == '0')):
        temp = num[:]
        arr.append(swap(temp, i, j))
  print("Case #{}: {} {}".format(index + 1, min(arr), max(arr)))
