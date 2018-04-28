#include <stdio.h>
#include <string.h>

int main() {
  char string[10000];
  int i, countCapitalLetter = 0, countSmallLetter = 0;
  scanf("%s", string);

  for (i = 0; i < strlen(string); i++) {
    if (string[i] >= 97 && string[i] <= 122) {
      countSmallLetter++;
    } else if (string[i] >= 65 && string[i] <= 90) {
      countCapitalLetter++;
    }
  }

  if (countSmallLetter != 0 && countCapitalLetter != 0) {
    printf("Mix");
  } else if (countSmallLetter == 0) {
    printf("All Capital Letter");
  } else {
    printf("All Small Letter");
  }

  return 0;
}
