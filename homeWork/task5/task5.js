let promptValue = prompt();

if (promptValue % 3 === 0 && promptValue % 5 === 0) {
  console.log("FizBuz");
} else if (promptValue % 5 === 0) {
  console.log("Fiz");
} else if (promptValue % 3 === 0) {
  console.log("Buz");
}
