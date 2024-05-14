import Book from "../src/Book";
import User from "../src/User";
import Cart from '../src/Cart'

describe("Cart", () => {
  it("should calculate total price correctly after adding and removing books", () => {
    const cart = new Cart(new User("Jane Doe", "jane@example.com", "user-123"));
    const book1 = new Book("Book One", "Author One", "ISBN1", 20, true);
    const book2 = new Book("Book Two", "Author Two", "ISBN2", 30, true);

    cart.addBook(book1);
    cart.addBook(book2);
    expect(cart.calculateTotalPrice()).toEqual(50);

    cart.removeBook(book1);
    expect(cart.calculateTotalPrice()).toEqual(30);
  });
});
