import Book from "./Book.js";
import User from "./User.js";

class Order {
  constructor(private user: User, private books: Book[]) {}

  calculateTotalPrice(): number {
    return this.books.reduce((total, book) => total + book.price, 0);
  }
}

export default Order;
