#include <stdio.h>

int main() {
  int nums[] = {100, 90, 50, 40, 10, 9, 5, 4, 1}, d, k, j, value;
  int i, v, x, l, c;

  scanf("%d", &d);
  
  i = v = x = l = c = 0;
  for (j = 1; j <= d; j++) {
    value = j;
    for (k = 0; k < 9; k++) {
      while (nums[k] <= value) {
        if (nums[k] == 100) { c++; } 
        if (nums[k] == 90) { c++; x++; } 
        if (nums[k] == 50) { l++; } 
        if (nums[k] == 40) { l++; x++; } 
        if (nums[k] == 10) { x++; } 
        if (nums[k] == 9) { x++; i++; } 
        if (nums[k] == 5) { v++; } 
        if (nums[k] == 4) { i++; v++; } 
        if (nums[k] == 1) { i++; } 
        value -= nums[k];
      }
    }
  }
  
  printf("%d %d %d %d %d", i, v, x, l, c);

  return 0;
}
