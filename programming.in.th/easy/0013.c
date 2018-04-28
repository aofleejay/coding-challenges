#include <stdio.h>

int main() {
  int nums[9], i, j, k, sum = 0;

  for (i = 0; i < 9; i++) {
    scanf("%d", &nums[i]);
    sum+=nums[i];
  }

  for (i = 0; i < 9; i++) {
    for (j = i + 1; j < 9; j++) {
      if (sum - nums[i] - nums[j] == 100) {
        for (k = 0; k < 9; k++) {
          if (k != i && k != j) {
            printf("%d\n", nums[k]);
          }
        }
        break;
      }
    }
  }

  return 0;
}
