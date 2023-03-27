// const arr = [];

// function add(num) {
//   for (i = 0; i < num; i++) {
//     let el = arr.push(Math.random());
//     Math.round(el);
//   }
//   return arr;
// }
// add(10);
// console.log(arr);

const arr = [];

function add(num) {
  for (i = 0; i < num; i++) {
    let el = Math.random();
    Math.round(el);
    arr.push(el);
  }
}
add(10);
console.log(arr);
