#include <stdio.h>
#include <math.h>

int main() {
  double x, y;
  scanf("%lf%lf", &x, &y);
  printf("%.0lf", ceil(y/x));

  return 0;
}
