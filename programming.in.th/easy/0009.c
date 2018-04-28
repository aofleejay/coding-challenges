#include <stdio.h>

int main() {
  int nums[3], temp, i, j;
  char string[4];
  scanf("%d%d%d%s", &nums[0], &nums[1], &nums[2], string);

  for (i = 0; i < 3; i++) {
    for (j = i + 1; j < 3; j++) {
      if (nums[i] > nums[j]) {
        temp = nums[i];
        nums[i] = nums[j];
        nums[j] = temp;
      }
    }
  }

  for (i = 0; i < 3; i++) {
    if (string[i] == 'A') {
      printf("%d ", nums[0]);
    } else if (string[i] == 'B') {
      printf("%d ", nums[1]);
    } else if (string[i] == 'C') {
      printf("%d ", nums[2]);
    }
  }
  return 0;
}
