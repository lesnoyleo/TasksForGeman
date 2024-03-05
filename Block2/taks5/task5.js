function getSum(from, to) {
  let result = 0;

  if (from < to) {
    for (let index = from; index <= to; index++) {
      result += index;
    }
  } else {
    for (let index = from; index >= to; index--) {
      result += index;
    }
  }

  return result;
}

console.log(getSum(1, 2));
