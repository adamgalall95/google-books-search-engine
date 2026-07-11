import classes from "./BooksList.module.scss";
import BookCard from "../BookCard/BookCard";
import BookModal from "../BookModal/BookModal";
import { useState } from "react";

export default function BookList({ books }) {
  const [selectedBook, setSelectedBook] = useState(null);

  return (
    <>
      <div className={classes.bookList}>
        {books.items.map((book) => (
          <BookCard key={book.id} book={book} onBookClick={setSelectedBook} />
        ))}
      </div>
      {selectedBook && (
        <BookModal book={selectedBook} onClose={() => setSelectedBook(null)} />
      )}
    </>
  );
}
