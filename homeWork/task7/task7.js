let promptValue = prompt('Введите направление путешествия');

while (
  promptValue !== "юг" &&
  promptValue !== "север" &&
  promptValue !== "запад" &&
  promptValue !== "восток"
) {
  console.log("Попробуйте еще раз");
  promptValue = prompt('Попробуйте еще раз');
}

switch (promptValue) {
  case "юг":
    console.log("на юг пойдешь счастье найдешль");
    break;
  case "север":
    console.log("на юг пойдешь счастье найдешль");
    break;
  case "запад":
    console.log("на юг пойдешь счастье найдешль");
    break;
  case "восток":
    console.log("на юг пойдешь счастье найдешль");
    break;
  default:
    break;
}
