let promptValue = 0;
while (promptValue < 100) {
  promptValue = prompt("Введите число больше 100");
  if (promptValue === null) {
    break;
  }
}
