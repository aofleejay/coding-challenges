#include <stdio.h>
#include <string.h>

int main() {
  int arr[10][10], ans[100], x, n, i, j, k, count = 0, dup[100];
  scanf("%d", &n);

  for (i = 0; i < 100; i++) ans[i] = 0;

  for (i = 0, k = 0; i < n; i++) {
    for (j = 0; j < n; j++, k++) {
      scanf("%d", &arr[i][j]);
      dup[k] = arr[i][j];
    }
  }

  for (i = 0; i < n; i++, count++) {
    for (j = 0, x = 0; j < n; j++) {
      x += arr[i][j];
    }
    ans[count] = x;
  }

  for (i = 0; i < n; i++, count++) {
    for (j = 0, x = 0; j < n; j++) {
      x += arr[j][i];
    }
    ans[count] = x;
  }

  x = 0;
  for (i = 0; i < n; i++) {
    for (j = 0; j < n; j++) {
      if (i == j) {
        x += arr[i][j];
      }
    }
  }
  ans[count] = x;
  count++;

  x = 0;
  for (i = 0; i < n; i++) {
    for (j = 0; j < n; j++) {
      if ((i + j) == (n - 1)) {
        x += arr[i][j];
      }
    }
  }
  ans[count] = x;
  count++;

  int flag = 1;
  for (i = 1; i < count; i++) {
    if (flag == 1 && (ans[i] != ans[i - 1])) {
      flag = 0;
      break;
    }
  }

  for (i = 1; i < n * 2; i++) {
    if (flag == 1 && (dup[i] == dup[i - 1])) {
      flag = 0;
      break;
    }
  }
  
  if (flag == 1) printf("Yes");
  else printf("No");

  return 0;
}
