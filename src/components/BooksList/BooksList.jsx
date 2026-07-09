import classes from "./BooksList.module.scss";
import BookCard from "../BookCard/BookCard";

export default function BookList({ books }) {
  return (
    <div className={classes.bookList}>
      {books.items.map((book) => (
        <BookCard key={book.id} book={book} />
      ))}
    </div>
  );
}
