function foo() {
  console.log("foo");
}

function boo() {
  console.log("boo");
}

function fooBoo(someBoolaen, funcFirst, funcSecond) {
  if (someBoolaen) {
    funcFirst();
  } else {
    funcSecond();
  }
}

fooBoo(true, foo, boo);

function deleteWhiteSpaces(value) {
  return value.replaceAll(" ", "");
}

console.log(deleteWhiteSpaces("Я люблю жабускрип"));
