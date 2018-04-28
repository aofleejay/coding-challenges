#include <stdio.h>
#include <string.h>

int main() {
  int i, isVovel;
  char str[101];
  scanf("%[^\n]s", str);

  for (i = 0; i < strlen(str); i++) {
    isVovel = (str[i+1] == 'a' || str[i+1] == 'e' || str[i+1] == 'i' || str[i+1] == 'o' || str[i+1] == 'u');
    if (!(str[i] == 'p' && isVovel && str[i-1] == str[i+1])) {
      printf("%c", str[i]);
    } else {
      str[i] = '0';
      str[i+1] = '0';
      i++;
    }
  }

  return 0;
}
