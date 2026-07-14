import classes from "./BooksList.module.scss";
import BookCard from "../BookCard/BookCard";
import BookModal from "../BookModal/BookModal";
import { useState } from "react";

export default function BookList({
  books,
  totalItems,
  maxResults,
  handleLoadMore,
}) {
  const [selectedBook, setSelectedBook] = useState(null);

  return (
    <>
      <div className={classes.bookList}>
        {books.items.map((book) => (
          <BookCard key={book.id} book={book} onBookClick={setSelectedBook} />
        ))}
      </div>
      {maxResults < totalItems && (
        <button className={classes.loadMore} onClick={handleLoadMore}>
          Load More
        </button>
      )}
      {selectedBook && (
        <BookModal book={selectedBook} onClose={() => setSelectedBook(null)} />
      )}
    </>
  );
}
