f = open('B-small-practice.in', 'r')
T = f.readline()
numbers = f.read().splitlines()

def isTidy(number):
  prev = '0'
  for digit in number:
    if digit < prev:
      return False
    prev = digit
  return True

def findTidy(number):
  if len(number) == 1:
    return number
  prev = '0'
  count = 0
  for i in range(0, len(number)):
    if number[i] < prev:
      left = str(int(number[:i]) - 1)
      right = '9' * (len(number) - i)
      return findTidy(left + right)
    prev = number[i]
  return int(number)

def main():
  for index, number in enumerate(numbers):
    number = number.strip()
    if isTidy(number):
      print("Case #{}: {}".format(index + 1, number))
    else:
      print("Case #{}: {}".format(index + 1, findTidy(number)))

main()
