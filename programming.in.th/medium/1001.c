#include <stdio.h>

int main() {
  int n, m, i, j, brick[20], start[20];
  char block[21][21];

  // Input
  scanf("%d%d", &n, &m);

  for (i = 0; i < n; i++) {
    scanf("%s", block[i]);
  }

  for (i = 0; i < m; i++) {
    scanf("%d", &brick[i]);
  }

  // Initialize brick start index
  for (i = 0; i < m; i++) {
    start[i] = n - 1;
  }

  // Find brick start index
  for (i = 0; i < m; i++) {
    for (j = 0; j < n; j++) {
      if (block[j][i] == 'O') {
        start[i] = j - 1;
        break;
      }
    }
  }

  // Replace . with brick from start[]
  for (i = 0; i < m; i++) {
    for (j = start[i]; j > start[i] - brick[i] && j >= 0; j--) {
      block[j][i] = '#';
    }
  }

  // Print Result
  for (i = 0; i < n; i++) {
    printf("%s\n", block[i]);
  }

  return 0;
}
