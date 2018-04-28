#include <stdio.h>

int main() {
  int a, b, c, sum;
  scanf("%d%d%d", &a, &b, &c);
  sum = a + b + c;

  if (sum <= 49) {
    printf("F");
  } else if (sum <= 54) {
    printf("D");
  } else if (sum <= 59) {
    printf("D+");
  } else if (sum <= 64) {
    printf("C");
  } else if (sum <= 69) {
    printf("C+");
  } else if (sum <= 74) {
    printf("B");
  } else if (sum <= 79) {
    printf("B+");
  } else {
    printf("A");
  }

  return 0;
}
