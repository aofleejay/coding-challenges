#include <stdio.h>
#include <string.h>

int main() {
  int i, j, n, score[] = { 0, 0, 0 };
  scanf("%d", &n);
  char str[n], a[110] = "", b[110] = "", g[110] = "";
  scanf("%s", str);

  for (i = 0; i < n; i+=3) {
    strcat(a, "ABC");
  }

  for (i = 0; i < n; i+=4) {
    strcat(b, "BABC");
  }

  for (i = 0; i < n; i+=6) {
    strcat(g, "CCAABB");
  }

  for (i = 0; i < n; i++) {
    if (str[i] == a[i]) score[0]++;
    if (str[i] == b[i]) score[1]++;
    if (str[i] == g[i]) score[2]++;
  }

  if (score[0] == score[1] && score[1] == score[2]) printf("%d\nAdrian\nBruno\nGoran", score[0]);
  else if (score[0] > score[1] && score[0] > score[2]) printf("%d\nAdrian", score[0]);
  else if (score[1] > score[0] && score[1] > score[2]) printf("%d\nBruno", score[1]);
  else if (score[2] > score[0] && score[2] > score[1]) printf("%d\nGoran", score[2]);
  else if (score[0] == score[1]) printf("%d\nAdrian\nBruno", score[0]);
  else if (score[1] == score[2]) printf("%d\nBruno\nGoran", score[1]);
  else if (score[0] == score[2]) printf("%d\nAdrian\nGoran", score[0]);

  return 0;
}
