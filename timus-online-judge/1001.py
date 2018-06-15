from sys import stdin, stdout
from math import sqrt
tokens = reversed(stdin.read().split())
stdout.write('\n'.join(['%.4f' % sqrt(float(t)) for t in tokens]))
