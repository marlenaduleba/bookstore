import { Book } from "./Book.js";
import User from "./User.js";

class Cart {
  private books: Book[] = [];

  constructor(private user: User) {}

  addBook(book: Book): void {
    if (book.availability) {
      this.books.push(book);
    } else {
      console.log(`Sorry, the book "${book.title}" is currently unavailable.`);
    }
  }

  removeBook(ISBN: string): void {
    this.books = this.books.filter((book) => book.ISBN !== ISBN);
  }

  calculateTotalPrice(): number {
    return this.books.reduce((total, book) => total + book.price, 0);
  }

  getBooks(): Book[] {
    return this.books;
  }
}

export default Cart;
