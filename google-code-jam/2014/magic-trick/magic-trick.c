#include <stdio.h>

int main() {
  int t, i, j, k, guest[100][2], card[100][2][4][4], row1[4], row2[4], count, ans;
  scanf("%d", &t);

  for (i = 0; i < t; i++) {
    scanf("%d", &guest[i][0]);
    for (j = 0; j < 4; j++) {
      for (k = 0; k < 4; k++) {
        scanf("%d", &card[i][0][j][k]);
      }
    }

    scanf("%d", &guest[i][1]);
    for (j = 0; j < 4; j++) {
      for (k = 0; k < 4; k++) {
        scanf("%d", &card[i][1][j][k]);
      }
    }
  }

  for (i = 0; i < t; i++) {
    count = 0;

    for (j = 0; j < 4; j++) {
      row1[j] = card[i][0][guest[i][0] - 1][j];
      row2[j] = card[i][1][guest[i][1] - 1][j];
    }

    for (j = 0; j < 4; j++) {
      for (k = 0; k < 4; k++) {
        if (row1[j] == row2[k]) {
          count++;
          ans = row1[j];
        }
      }
    }

    if (count == 0) {
      printf("Case #%d: Volunteer cheated!\n", i + 1);
    } else if (count > 1) {
      printf("Case #%d: Bad magician!\n", i + 1);
    } else {
      printf("Case #%d: %d\n", i + 1, ans);
    }
  }
  return 0;
}
