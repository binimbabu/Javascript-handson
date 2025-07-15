//1. Write code to get array of names from given array of object users
//2. Get back only active users
//3. Sort users by age descending
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

//first solution
// const names = [];
// users.sort((user1, user2)=> user1.age < user2.age ? -1 : 1)
// for(let i =0; i< users.length; i++){
//     if(users[i].isActive)
//     names.push(users[i].name);
// }
// console.log("User names", names)

//second solution
// const names=[];
// users.forEach((user, index, arr)=>{
//     if(arr[index].isActive)
//     names.push(arr[index].name);
// })
//  console.log("User names", names);

//third solution
// const names=[];
// users.forEach((user, index, arr)=>{
//     if(user.isActive)
//     names.push(user.name);
// })
//  console.log("User names", names);

//4th solution
// const names = users.sort((a, b)=> a.age < b.age ? -1 : 1).filter((userActive)=> userActive.isActive).map((user)=>{
//     return user.name;
// })
//  console.log("User names", names);
