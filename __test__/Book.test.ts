import Book from '../src/Book';

describe('Book', () => {
  it('should create an instance of Book', () => {
    const book = new Book('Test Title', 'Test Author', '1234567890', 29.99, true);
    expect(book).toBeInstanceOf(Book);
    expect(book.title).toBe('Test Title');
    expect(book.author).toBe('Test Author');
    expect(book.isbn).toBe('1234567890');
    expect(book.price).toBe(29.99);
    expect(book.availability).toBe(true);
  });
});
