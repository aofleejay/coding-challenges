#include <stdio.h>
#include <string.h>
#include <time.h>
#include <stdlib.h>

int main() {
  int T, A, i, j, k, finish, tempI, tempJ, count;
  srand(time(NULL));
  scanf("%d", &T);
  
  for (k = 0; k < T; k++) {
    scanf("%d", &A);
    printf("500 500\n");
    fflush(stdout);
    finish = 0;
    count = 0;
    while(!finish && count < 1000) {
      scanf("%d %d", &i, &j);
      if (i == 0 && j == 0) {
        finish = 1;
      } else {
        if (i == 1) tempI = i + 1;
        else if (i == 1000) tempI = i - 1;
        else tempI = 500 + rand() % 3;
        if (j == 1) tempJ = j + 1;
        else if (j == 1000) tempJ = j - 1;
        else tempJ = 500 + rand() % 3;

        printf("%d %d\n", tempI, tempJ);
        fflush(stdout);
        count++;
      }
    }
  }

  return 0;
}