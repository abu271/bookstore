import { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';

import { Book } from './Book';

async function getBooks() {
  try {
    const {data} = await axios.get('/api/book/books');
    const list = data.map(book => <Book key={book.id} {...book} />);
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
      <p>
        {books ? books : 'Loading...'}
      </p>
    </>
  );
}

export default App;