//пузырьковая сортировка

// const arr = [];

// function culc(min, max) {
//   let numb = Math.random() * (max + 100 + min) - 100;
//   return Math.round(numb);
// }

// function add(num) {
//   for (i = 0; i < num; i++) {
//     let el = culc(1, 100);
//     arr.push(el);
//   }
// }
// add(10);
// // console.log(arr);
// function sort() {
//   for (let i = 0; i <= arr.length; i++) {
//     for (let j = 0; j <= arr.length; j++) {
//       if (arr[j] < arr[j + 1]) {
//         var swap = arr[j];
//         arr[j] = arr[j + 1];
//         arr[j + 1] = swap;
//       }
//     }
//   }
// }
// sort();
// console.log(arr);

//быстрая сортировка
const newArr = [];
function culc(min, max) {
  let numb = Math.random() * (max + 100 + min) - 100;
  return Math.round(numb);
}

function add(num) {
  for (i = 0; i < num; i++) {
    let el = culc(1, 100);
    newArr.push(el);
  }
}
add(20);

function quicksort(array) {
  if (array.length < 2) {
    return array;
  }

  const index = Math.floor(Math.random() * array.length);

  const currentItem = array[index];

  let more = [];
  let less = [];

  for (let i = 0; i < array.length; i++) {
    if (i === index) {
      continue;
    }
    if (array[i] > currentItem) {
      more.push(array[i]);
    } else {
      less.push(array[i]);
    }
  }
  return [...quicksort(less), currentItem, ...quicksort(more)];
}
console.log(quicksort(newArr));
