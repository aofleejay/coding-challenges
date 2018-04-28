#include <stdio.h>

int main() {
  int i, j, temp, score[5], sum, peoples[] = { 1, 2, 3, 4, 5 };

  for (i = 0; i < 5; i++) {
    for (j = 0, sum = 0; j < 4; j++) {
      scanf("%d", &temp);
      sum += temp;
    }
    score[i] = sum;
  }

  for (i = 0; i < 5; i++) {
    for (j = i + 1; j < 5; j++) {
      if (score[i] < score[j]) {
        temp = score[i];
        score[i] = score[j];
        score[j] = temp;

        temp = peoples[i];
        peoples[i] = peoples[j];
        peoples[j] = temp;
      }
    }
  }

  printf("%d %d", peoples[0], score[0]);

  return 0;
}
