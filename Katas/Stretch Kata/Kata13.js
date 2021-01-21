/*

turn string and change it to different types of output.


Plan:

- make into objects and methods within that object?
- or make it into bunch of little functions outside of program?
- It may be better to contain everything in one function.

*/


// need a way to not end function when returning one function to 
//run a second or third function.
// may need to nest the functions within in here.


const makeCase = (input, type) => {
  if (typeof type === 'string') {
    type = type.split();
  }
  for (let i = 0; i < type.length; i++) {
    switch (type[i]) {
      case 'camel':
        input = camelCase(input);
        break;
      case 'pascal':
        input = pascal(input);
        break;
      case 'snake':
        input = snake(input);
        break;
      case 'kebab':
        input = kebab(input);
        break;
      case 'title':
        input = title(input);
        break;
      case 'vowel':
        input = vowel(input);
        break;
      case 'consonant':
        input = consonant(input);
        break;
      case 'upper':
        input = upper(input);
        break;
      case 'lower':
        input = lower(input);
        break;
    }
  }
  return input
}

//camel
const camelCase = function (input) {
  let res = [];
  for (let i = 0; i < input.length; i++) {
    if (input[i] === ' ') {
      i++;
      res.push(input[i].toUpperCase());
    }
    else {
      res.push(input[i]);
    }
  }
  return res.join('');
};

//pascal
const pascal = input => {
  let res = [];
  res.push(input[0].toUpperCase())
  for (let i = 1; i < input.length; i++) {
    if (input[i] === ' ') {
      i++;
      res.push(input[i].toUpperCase());
    }
    else {
      res.push(input[i]);
    }
  }
  return res.join('');
}

//snake
const snake = input => {
  let res = [];
  for (let i = 0; i < input.length; i++) {
    if (input[i] === ' ') {
      res.push('_');
    }
    else {
      res.push(input[i]);
    }
  }
  return res.join('');
}

//kebab
const kebab = input => {
  let res = [];
  for (let i = 0; i < input.length; i++) {
    if (input[i] === ' ') {
      res.push('-');
    }
    else {
      res.push(input[i]);
    }
  }
  return res.join('');
}


//title
const title = input => {
  let res = [];
  res.push(input[0].toUpperCase())
  for (let i = 1; i < input.length; i++) {
    if (input[i] === ' ') {
      res.push(input[i])
      i++;
      res.push(input[i].toUpperCase());
    }
    else {
      res.push(input[i]);
    }
  }
  return res.join('');
}

//vowel
const vowel = input => {
  let ourRegex = /[aeiou]/;
  let res = [];
  res.push(input[0].toUpperCase())
  for (let i = 1; i < input.length; i++) {
    if (ourRegex.test(input[i])) {
      res.push(input[i].toUpperCase());
    }
    else {
      res.push(input[i]);
    }
  }
  return res.join('');
}

//consonant
const consonant = input => {
  let ourRegex = /[^aeiou]/;
  let res = [];
  res.push(input[0].toUpperCase())
  for (let i = 1; i < input.length; i++) {
    if (ourRegex.test(input[i])) {
      res.push(input[i].toUpperCase());
    }
    else {
      res.push(input[i]);
    }
  }
  return res.join('');
}

//upper
const upper = input => {
  let res = [];
  for (let i = 0; i < input.length; i++) {
    res.push(input[i].toUpperCase());
  }
  return res.join('');
}

//lower
const lower = input => {
  let res = [];
  for (let i = 0; i < input.length; i++) {
    res.push(input[i].toLowerCase());
  }
  return res.join('');
}


console.log(makeCase("this is a string", "camel"));
console.log(makeCase("this is a string", "pascal"));
console.log(makeCase("this is a string", "snake"));
console.log(makeCase("this is a string", "kebab"));
console.log(makeCase("this is a string", "title"));
console.log(makeCase("this is a string", "vowel"));
console.log(makeCase("this is a string", "consonant"));
console.log(makeCase("this is a string", ["upper", "snake"]));


