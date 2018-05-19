#include <stdio.h>

int main(){
  int n, i, j, k, nums[100], nugget, hasNoNugget = 1;
  for (i = 0; i < 100; i++) {
    nums[i] = 0;
  }

  scanf ("%d", &n);

  for (i = 0; i < 17; i++) {
    for (j = 0; j < 12; j++) {
      for (k = 0; k < 6; k++) {
        nugget = 6 * i + 9 * j + 20 * k;
        if (nugget <= 100) {
          nums[nugget] = nugget;
        }
      }
    }
  }

  for (i = 6; i <= n; i++) {
    if (nums[i] != 0) {
      hasNoNugget = 0;
      printf ("%d\n", nums[i]);
    }
  }

  if (hasNoNugget) {
    printf("no");
  }

  return 0;
}
