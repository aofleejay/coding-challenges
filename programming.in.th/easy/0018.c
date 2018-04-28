#include <stdio.h>

int main() {
  int n, j, k, i, start, count = 0, isLoop = 1;
  scanf("%d%d", &n, &k);
  int nums[n];

  for (i = 2; i <= n; i++) {
    nums[i] = i;
  }

  start = i = 2;
  while (isLoop) {
    if (i > n) {
      for (j = 2; j <= n; j++) {
        if (nums[j] != -1) {
          start = i = nums[j];
          break;
        }
      }
    } else {
      if (nums[i] != -1) {
        nums[i] = -1;
        count++;

        if (count == k) {
          printf("%d", i);
          isLoop = 0;
        }
      }
      
      i+=start;
    }    
  }

  return 0;
}
