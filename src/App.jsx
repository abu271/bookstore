import { useState, useEffect } from 'react';
import './App.css';
import { bookApi } from './axios';
import { Book } from './components/book/Book';

async function getBooks() {
  try {
    const {data} = await bookApi.get('/api/book/books/');
    const list = data.map(book => <Book key={book.book_id} {...book} />);
    return list;
  } catch (error) {
    console.error(error);
  }
}

function App() {
  const [books, setBooks] = useState(null);

  useEffect(() => {
    getBooks().then(setBooks);
  }, []);

  return (
    <>
      <div>
        {books ? books : 'Loading books... Grab a cup of coffee! ☕'}
      </div>
    </>
  );
}

export default App;