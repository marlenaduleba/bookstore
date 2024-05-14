import Book from "../src/Book";
import User from "../src/User";
import Order from "../src/Order";

describe("Order", () => {
  it("should correctly calculate the total price of the books in the order", () => {
    const user = new User("Jane Doe", "jane@example.com", "user-123");
    const book1 = new Book("Book One", "Author One", "ISBN1", 20, true);
    const book2 = new Book("Book Two", "Author Two", "ISBN2", 30, true);
    const order = new Order(user, [book1, book2]);

    expect(order.calculateTotalPrice()).toEqual(50);
  });

  it("should correctly calculate the total price as zero when there are no books", () => {
    const user = new User("John Doe", "john@example.com", "user-456");
    const order = new Order(user, []);

    expect(order.calculateTotalPrice()).toEqual(0);
  });
});
