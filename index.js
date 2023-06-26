(function (ops) {
  const opsSum = [];
  if (Array.isArray(ops)) {
    for (var i = 0; i <= ops.length - 1; i++) {
      opsVal = ops[i];
      console.log(opsVal);
      console.log(opsSum);
      switch (opsVal) {
        case 'C': {
          if (opsSum.length >= 1) {
            opsSum.shift();
          }
          break;
        }
        case 'D':
          if (opsSum.length >= 1) {
            const number = parseInt(opsSum[opsSum.length - 1]);
            opsSum.push(number * 2);
          }
          break;
        case '+':
          if (opsSum.length >= 2) {
            const lastOne = parseInt(opsSum[opsSum.length - 1], 10);
            const lastTwo = parseInt(opsSum[opsSum.length - 2], 10);
            opsSum.push(lastOne + lastTwo);
          }
          break;
        default:
          if (opsVal) {
            const number = parseInt(opsVal);
            if (opsVal >= -312 && opsVal <= 312) {
              opsSum.push(number);
            }
          }
      }
    }
  }
  console.log('opssum', opsSum);
  const soma = opsSum.reduce((prev, curr) => prev + curr, 0);
  console.log(soma);
})(['2', '5', 'C', 'D', '+']);
