import { books } from '../data.js'
import { Book } from './Book.jsx'

function BookList() {
  return (
    <>
      <h1>Book List: {books.length} books found</h1>
      {books.map((book) => (
        <div key={book.name}>
          <Book {...book} />
        </div>
      ))}
    </>
  );
}

export default BookList