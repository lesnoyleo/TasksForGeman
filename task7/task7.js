let sum = 0;
for (let index = 0; index <= 20; index++) {
  if (index % 5 === 0) {
    continue;
  }
  console.log(index);

  sum += index;
  if (sum > 15) {
    break;
  }
}
