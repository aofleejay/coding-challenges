#include <stdio.h>

int main() {
  int nums[10], unique[10], temp, i, j, count = 0;

  for (i = 0; i < 10; i++) {
    scanf("%d", &temp);
    nums[i] = temp % 42;
    unique[i] = -1;
  }

  for (i = 0; i < 10; i++) {
    for (j = 0, temp = 0; j < 10; j++) {
      if (nums[i] == unique[j]) {
        temp = 1;
        break;
      }
    }

    if (temp == 0) {
      unique[i] = nums[i];
      count++;
    }
  }

  printf("%d", count);

  return 0;
}
