#include <stdio.h>

int main() {
  double r, PI = 3.1415926535897932384626433832795028841971;
  scanf("%lf", &r);

  printf("%lf\n%lf", PI * r * r, r * r + r * r);
}
