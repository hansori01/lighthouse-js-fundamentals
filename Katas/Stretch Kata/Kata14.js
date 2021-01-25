const urlDecode = function (text) {
  // a variable to hold the object 
  let str = text.replace(/%20/g, ' ')
  let array = str.split('&')
  let newArr = [];
  for (let i = 0; i < array.length; i++) {
    newArr.push(array[i].split('='))
  }
  let obj = Object.fromEntries(newArr)
  return obj
};

console.log(urlDecode("duck=rubber"));
console.log(urlDecode("bootcamp=Lighthouse%20Labs"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain").weather);