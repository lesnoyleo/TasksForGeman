function getSum(iterations) {
    let result = 0;
  
    for (let index = 0; index <= iterations; index++) {
      result += index;
    }
  
    return result;
  }
  
  console.log(getSum(100));
  