#include <stdio.h>

int main() {
  int i, j, temp, nums[4];
  for (i = 0; i < 4; i++) {
    scanf("%d", &nums[i]);
  }

  for (i = 0; i < 4; i++) {
    for (j = i + 1; j < 4; j++) {
      if (nums[i] < nums[j]) {
        temp = nums[i];
        nums[i] = nums[j];
        nums[j] = temp;
      }
    }
  }

  printf("%d", nums[1] * nums[3]);

  return 0;
}
