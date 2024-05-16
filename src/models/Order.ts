import {Book} from "./Book.js";
import User from "./User.js";

class Order {
  private totalPrice: number;

  constructor(public user: User, public books: Book[]) {
    this.totalPrice = this.calculateTotalPrice();
  }

  private calculateTotalPrice(): number {
    return this.books.reduce((total, book) => total + book.price, 0);
  }

  getOrderSummary(): string {
    return `
        Order Summary:
        User: ${this.user.name} (${this.user.email})
        Books Ordered: ${this.books.map((book) => book.title).join(", ")}
        Total Price: $${this.totalPrice.toFixed(2)}
    `;
  }
}

export default Order;
