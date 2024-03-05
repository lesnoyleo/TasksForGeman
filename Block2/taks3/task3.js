function trimString(value, from, to) {
  value = value.replace(from, "");
  value = value.replace(to, "");
  return value;
}

console.log(trimString("somevalue", "som", "lue"));
