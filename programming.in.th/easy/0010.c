#include <stdio.h>
#include <string.h>

int main() {
  char string[51];
  int i, temp, nums[] = { 1, 0, 0 };
  scanf("%s", string);

  for (i = 0; i < strlen(string); i++) {
    if (string[i] == 'A') {
      temp = nums[0];
      nums[0] = nums[1];
      nums[1] = temp;
    } else if (string[i] == 'B') {
      temp = nums[1];
      nums[1] = nums[2];
      nums[2] = temp;
    } else if (string[i] == 'C') {
      temp = nums[0];
      nums[0] = nums[2];
      nums[2] = temp;
    }
  }

  for (i = 0; i < 3; i++) {
    if (nums[i] == 1) {
      printf("%d", i + 1);
    }
  }

  return 0;
}
