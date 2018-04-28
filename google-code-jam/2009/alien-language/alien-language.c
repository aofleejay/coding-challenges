#include <stdio.h>
#include <string.h>
#include <regex.h>

int main() {
  int L, D, N, i, j, count;
  regex_t re;
  char dic[5000][16], word[651];
  FILE *fout, *fin;

  fin = fopen("A-large-practice.in", "r");
  fout = fopen("A-large-practice.out", "w+");

  fscanf(fin, "%d %d %d", &L, &D, &N);

  for(i = 0; i < D; i++) {
    fscanf(fin, "%s", dic[i]);
  }

  for(i = 0; i < N; i++) {
    fscanf(fin, "%s", word);
    count = 0;

    for(j = 0; j < strlen(word); j++) {
      if (word[j] == '(') {
        word[j] = '[';
      }
      if (word[j] == ')') {
        word[j] = ']';
      }
    }

    regcomp(&re, word, 0);
    for(j = 0; j < D; j++) {
      if (!regexec(&re, dic[j], 0, NULL, 0)) {
        count++;
      }
    }
    fprintf(fout, "Case #%d: %d\n", i+1, count);
  }

  fclose(fout);
  fclose(fin);

  return 0;
}
