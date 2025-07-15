//Sort array of objects by author's last name

const books = [
  { name: "Twilight", author: "Bini Peter" },
  { name: "Harry Potter", author: "Neha Mia" },
  { name: "The Hunting", author: "Anna Via" },
];
books.sort((book1, book2) => {
  const authorLastname1 = book1.author.split(" ")[1];
  const authorLastname2 = book2.author.split(" ")[1];
  return authorLastname1 < authorLastname2 ? -1 : 1;
});
console.log(books);
