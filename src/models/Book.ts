export class Book {
  constructor(
    public title: string,
    public author: string,
    public ISBN: string,
    public price: number,
    public availability: boolean
  ) {}

  getDetails() {
    return `"${this.title}" by ${this.author}`;
  }
}

export class FictionBook extends Book {
  readonly genre: string = "Fiction";

  constructor(
    title: string,
    author: string,
    ISBN: string,
    price: number,
    availability: boolean,
  ) {
    super(title, author, ISBN, price, availability);
  }

  getDetails() {
    return `"${this.title}" by ${this.author} - ${this.genre}`;
  }
}

export class NonFictionBook extends Book {
  readonly genre: string = "Non-Fiction";

  constructor(
    title: string,
    author: string,
    ISBN: string,
    price: number,
    availability: boolean,
  ) {
    super(title, author, ISBN, price, availability);
  }

  getDetails() {
    return `"${this.title}" by ${this.author} - ${this.genre}`;
  }
}
