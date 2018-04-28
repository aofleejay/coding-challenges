#include <stdio.h>

int main() {
  int n, i, min, max;
  scanf("%d", &n);
  long nums[n];

  for (i = 0; i < n; i++) {
    scanf("%ld", &nums[i]);
  }

  min = max = nums[0];
  for (i = 1; i < n; i++) {
    if (nums[i] > max) {
      max = nums[i];
    }

    if (nums[i] < min) {
      min = nums[i];
    }
  }

  printf("%d\n%d", min, max);

  return 0;
}
