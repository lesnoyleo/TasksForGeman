function getSumNumbers(value) {
  let result = 0;
  let stringValue = value.toString();

  for (let index = 0; index < stringValue.length; index++) {
    result += parseInt(stringValue[index]);
  }
  return result;
}

console.log(getSumNumbers(228));
