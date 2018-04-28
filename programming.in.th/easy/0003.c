#include <stdio.h>

int main() {
  int m, n, i, j;
  scanf("%d%d", &m, &n);
  long matrix1[m][n], matrix2[m][n];

  for (i = 0; i < m; i++) {
    for (j = 0; j < n; j++) {
      scanf("%ld", &matrix1[i][j]);
    }
  }

  for (i = 0; i < m; i++) {
    for (j = 0; j < n; j++) {
      scanf("%ld", &matrix2[i][j]);
    }
  }

  for (i = 0; i < m; i++) {
    for (j = 0; j < n; j++) {
      printf("%ld ", matrix1[i][j] + matrix2[i][j]);
    }
    printf("\n");
  }

  return 0;
}
