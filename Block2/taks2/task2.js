function calculateOverpayment(value) {
  let calculatedOverpaymentPerYear = 0;
  let precentOfInterest = 17;
  let countYears = 5;

  calculatedOverpaymentPerYear = (value / precentOfInterest) * countYears;

  return calculatedOverpaymentPerYear;
}

console.log(calculateOverpayment(100));
