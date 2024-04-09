for (i = 1; i < 6; i++) {
  a = ' '
  b = '*'
  c = '  '
  for (n = 3; n >= i; --n) {
    a = a + a
    break
  }
  for (j = 1; j <= i; j++) {
    a = a + '  ' + b
  }
  for (k = 4; k <= i; k++) {
    a = a + '  ' + b
    break
  }
  for (l = 4; l >= i; --l) {
    a = c + a
  }
  console.log(a)
}
