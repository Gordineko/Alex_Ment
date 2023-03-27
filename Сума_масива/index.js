// const arr = [10, 20, 10, 50, 10, 30, 6];

// let sumEl = arr[0];
// function sum(array) {
//   for (let i = 1; i < array.length; i++) {
//     sumEl += array[i];
//   }
//   return sumEl;
// }

// sum(arr);
// console.log(sumEl);
const arr = [
  [10, 20, 10, 50, 10, 30, 6],
  [1, 3, 5],
];

let sumEl = 0;
function sum(array) {
  array.forEach((student) => {
    student.forEach((data) => {
      sumEl += data;
    });
  });
}

sum(arr);
console.log(sumEl);

// for (let i = 1; i < array.length; i++) {
//     sumEll += array[i];
//     let innerArrayLength = array[i].length;
//     for (let j = 0; j < innerArrayLength; j++) {
//       sumEl += array[i][j];
//     }
//   }
//   //   return sumEl;
