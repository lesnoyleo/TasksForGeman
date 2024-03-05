let key = true;
let dcouments = true;
let pen = true;
let apple = false;
let orange = true;

let sholdGoToWork = null;

if (key && dcouments && pen && (apple || orange)) {
  sholdGoToWork = true;
} else {
  sholdGoToWork = false;
}

// читкод как это сделать на некст лвле
// sholdGoToWork = key && dcouments && pen && (apple || orange);

console.log(sholdGoToWork);
