// 1. Get parent node
const button = document.getElementById("myButton");
console.log("Parent of button:", button.parentElement);

// 2. Get children of #list
const list = document.getElementById("list");
console.log("Children of #list:");
for (let item of list.children) {
  console.log(item.textContent);
}
// 3. Get first and last child of list
console.log("First child:", list.firstElementChild.textContent);
console.log("Last child:", list.lastElementChild.textContent);

// 4. Get next and previous sibling of second list item
const secondItem = list.children[1];
console.log("Second item:", secondItem.textContent);
console.log("Next sibling:", secondItem.nextElementSibling.textContent);
console.log("Previous sibling:", secondItem.previousElementSibling.textContent);
// 5. Using closest to find ancestor
const listItem = document.querySelector(".item");
const container = listItem.closest("#container");
console.log("Closest container:", container.id);
