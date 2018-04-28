#include <stdio.h>
#include <string.h>

long calculateScore(char* str) {
  int k;
  long score = 0, charge = 1;

  for (k = 0; k < strlen(str); k++) {
    if (str[k] == 'C') charge *= 2;
    if (str[k] == 'S') score += charge;
  }

  return score;
}

int main() {
  int T, i, j, countSwap;
  long D, lastCalculateScore;
  char P[31], temp;
  scanf("%d", &T);
  for(i = 0; i < T; i++) {
    scanf("%ld %s", &D, P);
    countSwap = 0;
    do {
      if (D >= calculateScore(P)) break;
      lastCalculateScore = calculateScore(P);
      for (j = strlen(P) - 1; j > 0 ; j--) {
        if (P[j] == 'S' && P[j-1] == 'C') {
          temp = P[j];
          P[j] = P[j-1];
          P[j-1] = temp;
          countSwap++;
          break;
        }
      }
    } while (lastCalculateScore != calculateScore(P));

    if (calculateScore(P) > D) {
      printf("Case #%d: IMPOSSIBLE\n", i + 1);
    }  else {
      printf("Case #%d: %d\n", i + 1, countSwap);
    }
  }

  return 0;
}