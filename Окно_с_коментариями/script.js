const button = document.querySelector(".btn");
const form = document.querySelector(".form");
const textInput = document.querySelector(".textarea");
const mainContent = document.querySelector(".comment_list");
const person = document.querySelector(".person_name");
const currentDate = new Date();
const formatter = new Intl.DateTimeFormat("en", {
  day: "numeric",
  month: "long",
  year: "numeric",
});
const dateString = formatter.format(currentDate);

function createDiv() {
  event.preventDefault();

  const name = person.textContent;
  const div = document.createElement("div");
  const text = textInput.value;

  div.className = "comment";
  div.innerHTML = ` <div class="comment_owner"><span>${name}</span><div class="comment_date">${dateString}</div></div><div class="comment_content"><div class="arrow"></div > <span class="add_text">${text}</span></div>`;

  return div;
}
function addDivInDom() {
  const newDiv = createDiv();
  mainContent.appendChild(newDiv);
  textInput.value = "";
}

form.addEventListener("submit", addDivInDom);
