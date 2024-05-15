import Book from "./models/Book.js";
import User from "./models/User.js";
import Cart from "./models/Cart.js";
import Order from "./models/Order.js";

const book1 = new Book(
  "The Great Gatsby",
  "F. Scott Fitzgerald",
  "1234567890",
  10.99,
  true
);
const book2 = new Book("1984", "George Orwell", "2345678901", 8.99, true);
const book3 = new Book(
  "To Kill a Mockingbird",
  "Harper Lee",
  "3456789012",
  12.99,
  false
);

const user1 = new User("Alice", "alice@example.com", "ISBN1");
const user2 = new User("Bob", "bob@example.com", "ISBN2");

const cart1 = new Cart(user1);
cart1.addBook(book1);
cart1.addBook(book2);
cart1.addBook(book3); // This book is unavailable

const cart2 = new Cart(user2);
cart2.addBook(book2);

const order1 = new Order(user1, cart1.getBooks());
const order2 = new Order(user2, cart2.getBooks());

console.log(order1.getOrderSummary());
console.log(order2.getOrderSummary());

function simulateBookstore() {
  console.log("Simulating bookstore interactions...");

  const books = [book1, book2, book3];
  const users = [user1, user2];

  users.forEach((user) => {
    const cart = new Cart(user);
    books.forEach((book) => {
      cart.addBook(book);
    });
    const order = new Order(user, cart.getBooks());
    console.log(order.getOrderSummary());
  });
}

simulateBookstore();
