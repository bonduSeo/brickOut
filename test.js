const arr = [1, 2, 3, 4];
const result = arr.reduce((arr, cur) => {
  return arr + cur;
}, 1);
console.log(result);
