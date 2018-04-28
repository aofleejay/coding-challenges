#include <stdio.h>
#include <stdlib.h>

int main() {
  int n, k, i, j, count = 0;
  long sums, sumb, sum[55], temp;
  scanf("%d", &n);
  long s[n], b[n];

  for (i = 0; i < n; i++) {
    scanf("%ld%ld", &s[i], &b[i]);
  }

  for (i = 0; i < n; i++) {
    for (j = i; j < n; j++, count++) {
      for (k = i, sums = 1, sumb = 0; k <= j; k++) {
        sums *= s[k];
        sumb += b[k];
      }
      sum[count] = labs(sums - sumb);
      printf("%ld %ld %ld\n", sums, sumb, sum[count]);
    }
  }

  for (i = 0; i < count; i++) {
    for (j = i + 1; j < count; j++) {
      if (sum[i] > sum[j]) {
        temp = sum[i];
        sum[i] = sum[j];
        sum[j] = temp;
      }
    }
  }

  printf("%ld", sum[0]);
  // for (i = 0; i < count; i++) {
  //   printf("%ld ", sum[i]);
  // }

  return 0;
}
