#include <stdio.h>

int main() {
  long a, b, i;
  scanf("%ld%ld", &a, &b);

  i = a < b ? a : b;
  for (; i >= 1; i--) {
    if (a % i == 0 && b % i == 0) {
      printf("%ld", i);
      break;
    }
  }

  return 0;
}
