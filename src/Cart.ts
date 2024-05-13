import Book from "./Book.js";
import User from "./User.js";

class Cart {
  private books: Book[] = [];

  constructor(private user: User) {}

  addBook(book: Book): void {
    this.books.push(book);
  }

  removeBook(book: Book): void {
    this.books = this.books.filter((b) => b !== book);
  }

  calculateTotalPrice(): number {
    return this.books.reduce((total, book) => total + book.price, 0);
  }
}

export default Cart;
