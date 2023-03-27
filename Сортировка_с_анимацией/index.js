const mainContent = document.querySelector(".box");
let box;
const arr = [10, 4, 2, 7, 11, 1, 5, 3, 8, 6, 9];

console.log(arr);

function removeElement(elementClass) {
  let element = document.getElementsByClassName(elementClass);
  while (element.length) {
    element[0].parentNode.removeChild(element[0]);
  }
}
function onBtnClick() {
  for (let i = 0; i <= arr.length; i++) {
    for (let j = 0; j <= arr.length; j++) {
      if (arr[j] > arr[j + 1]) {
        var swap = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = swap;
      }
    }
  }
  removeElement("num_box");
  removeElement("num_btn");
  createEl();
}

function createButton() {
  const btn = document.createElement("button");
  btn.className = "num_btn";
  btn.innerText = "Sort";
  btn.addEventListener("click", onBtnClick);
  mainContent.append(btn);
}

function createEl() {
  arr.map((item) => {
    box = document.createElement("div");
    box.innerText = `${item}`;
    box.className = "num_box";
    mainContent.append(box);
  });
  createButton();
}
createEl();
