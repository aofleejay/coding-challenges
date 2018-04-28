#include <stdio.h>
#include <string.h>

int main() {
  int l, n, i, j, check;
  char word1[1001], word2[1001];
  scanf("%d%d", &l, &n);
  scanf("%s", word1);

  for (i = 1; i < n; i++) {
    scanf("%s", word2);

    for (j = 0, check = 0; j < l; j++) {
      if (word1[j] != word2[j]) {
        check++;
      }
    }

    if (check > 2) {
      break;
    }

    strcpy(word1, word2);
  }

  printf("%s", word1);

  return 0;
}
