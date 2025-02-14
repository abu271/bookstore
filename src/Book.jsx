export const Book = (book) => {
  return (
    <div>
      <h1>Title: {book.name}</h1>
      <h2>Author: {book.authors}</h2>
      <p>Edition: {book.edition}</p>
      <p>Publication year: {book.publication_year}</p>
    </div>
  );
}