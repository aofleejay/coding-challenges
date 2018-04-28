#include <stdio.h>
#include <string.h>

int main() {
  int T, R, C, H, V, i, j, k, l, m, sum1, sum2, sum3, sum4, finish;
  char waffle[101][101];
  scanf("%d", &T);

  for (i = 0; i < T; i++) {
    finish = 0;
    scanf("%d %d %d %d", &R, &C, &H, &V);
    for (j = 0; j < R; j++) {
      scanf("%s", waffle[j]);
    }

    for (j = 1; j < R; j++) {
      for (k = 1; k < C && finish == 0; k++) {
        sum1 = sum2 = sum3 = sum4 = 0;
        for (l = 0; l < j; l++) {
          for (m = 0; m < k; m++) {
            if (waffle[l][m] == '@') {
              sum1++;
            }
          }
        }

        for (l = 0; l < j; l++) {
          for (m = k; m < C; m++) {
            if (waffle[l][m] == '@') {
              sum2++;
            }
          }
        }

        for (l = j; l < R; l++) {
          for (m = 0; m < k; m++) {
            if (waffle[l][m] == '@') {
              sum3++;
            }
          }
        }

        for (l = j; l < R; l++) {
          for (m = k; m < C; m++) {
            if (waffle[l][m] == '@') {
              sum4++;
            }
          }
        }

        if (sum1 == sum2 && sum2 == sum3 && sum3 == sum4) {
          printf("Case #%d: POSSIBLE\n", i + 1);
          finish = 1;
        }
      }
    }

    if (finish == 0) printf("Case #%d: IMPOSSIBLE\n", i + 1);
  }

  return 0;
}
