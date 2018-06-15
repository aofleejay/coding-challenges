from sys import stdin
number = stdin.read()
print sum(range(min(int(number), 1), max(int(number), 1) + 1))
