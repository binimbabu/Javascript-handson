const users = [
  {
    id: 1,
    name: "Bini",
    isActive: true,
    age: 10,
  },
  {
    id: 2,
    name: "Babu",
    isActive: true,
    age: 40,
  },
  {
    id: 3,
    name: "Anna",
    isActive: false,
    age: 30,
  },
];

//first method
// isUserExists = false;
// const isNameExists = function (num, arr) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i].name.includes(num)) {
//       isUserExists = true;
//     }
//   }
//   return isUserExists;
// };
// const nameExist = isNameExists("Anna", users);
// console.log(nameExist);

//second method
// const isNameExists = (name, users) => users.some((user) => user.name === name);
// const nameExist = isNameExists("Anna", users);
// console.log(nameExist);

const isNameExists = function (name, users) {
  const index = users.findIndex((u) => u.name === name);
  return index !== -1;
};
const nameExist = isNameExists("Anna", users);
console.log(nameExist);
