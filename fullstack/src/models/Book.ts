export class Book {
  constructor(
    public id: number,
    public title: string,
    public category: string, // Error la c estaba en mayuscula
    public price: number,
    public stock: number,
  ) {}

  static findById(books: Book[], id: number): Book {
    const book = books.find((book) => book.id === id);
    if (!book) {
      throw new Error(`Book with id ${id} not found`);
    }
    return book;
  }
}
