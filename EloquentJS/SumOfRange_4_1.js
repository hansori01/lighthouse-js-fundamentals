//my second loop is broke!! why?!?! ??

const range = (start, end, step) => {
  let array = [];
  if (step == null) {
    let num = start;
    while (num <= end) {
      array.push(num);
      num++
    }
  } /*
  not sure why but this part of the function is broken
  
    else if (step < 0) {
    let num = start;
    while (num >= end) {
      array.push(num);
      num = num - step;
    }
  }*/ else {
  let num = start;
while (num <= end) {
  array.push(num);
  num += step;
}
  }
return array;
}

console.log(range(5,20))
const sum = (array) => {
  //return array.reduce((acc, curr) => { return acc + curr })
}
console.log(sum(range(1, 10, -2)));




//His solution

function range(start, end, step = start < end ? 1 : -1) {
  let array = [];

  if (step > 0) {
    for (let i = start; i <= end; i += step) array.push(i);
  } else {
    for (let i = start; i >= end; i += step) array.push(i);
  }
  return array;
}

function sum(array) {
  let total = 0;
  for (let value of array) {
    total += value;
  }
  return total;
}