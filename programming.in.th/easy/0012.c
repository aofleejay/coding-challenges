#include <stdio.h>
#include <string.h>

int main() {
  int n = 5, i, j;
  char str[16];
  scanf("%s", str);

  for (i = 0; i < n; i++) {
    if (i == 0 || i == 4) {
      printf("..");
      for (j = 1; j <= strlen(str); j++) {
        if (j % 3 == 0) {
          printf("*");
        } else {
          printf("#");
        }

        if (j == strlen(str)) {
          printf("..");
        } else {
          printf("...");
        }
      }
    } else if (i == 1 || i == 3) {
      for (j = 1; j <= strlen(str); j++) {
        if (j % 3 == 0) {
          printf(".*.*");
        } else {
          printf(".#.#");
        }
      }
      printf(".");
    } else {
      printf("#.%c.", str[0]);
      for (j = 1; j < strlen(str); j++) {
        if (j % 3 == 1) {
          printf("#.%c.", str[j]);
        } else {
          printf("*.%c.", str[j]);
        }
      }
      if (j % 3 == 0) {
        printf("*");
      } else {
        printf("#");
      }
    }

    printf("\n");
  }
  return 0;
}
