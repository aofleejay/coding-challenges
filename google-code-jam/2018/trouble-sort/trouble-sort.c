#include <stdio.h>

int main() {
  int T, N, i, j, k, l, breakIndex;
  long V[100000], B[100000], temp;
  scanf("%d", &T);

  for (i = 0; i < T; i++) {
    scanf("%d", &N);
    for(j = 0; j < N; j++) {
      scanf("%ld", &V[j]);
      B[j] = V[j];
    }

    for(k = 0; k < N - 1; k++) {
      for (l = 0; l < N - k -1; l++) {
        if (B[l] > B[l+1]) {
          temp = B[l];
          B[l] = B[l+1];
          B[l+1] = temp;
        }
      }
    }

    for(k = 0; k < N - 2; k++) {
      for (l = 0; l < N - k - 2; l++) {
        if (V[l] > V[l+2]) {
          temp = V[l];
          V[l] = V[l+2];
          V[l+2] = temp;
        }
      }
    }

    breakIndex = -1;
    for(k = 0; k < N; k++) {
      if (B[k] != V[k]) {
        breakIndex = k;
        break;
      }
    }

    if (breakIndex == -1) printf("Case #%d: OK\n", i + 1);
    else printf("Case #%d: %d\n", i + 1, breakIndex);
  }

  return 0;
}