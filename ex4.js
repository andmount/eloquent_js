function arrayToList(array) {
  let list = null;

  for (let i = array.length - 1; i >= 0; i--) {
    list = {value: array[i], rest: list};
  }
  return list;
}

function prepend(element, list) {
  return list = {value: element, rest: list}
}

function nth(list, index) {
  if (index === 1) list.value;
  else nth(list, index - 1 );
}

// let list = null;

// list = {value: 1, rest: list};
// list = {value: 2, rest: list};
// console.log(list);

console.log(prepend(50, (arrayToList([10, 20]))));