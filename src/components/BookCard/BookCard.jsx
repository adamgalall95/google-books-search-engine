import classes from "./BookCard.module.scss";

export default function BookCard({ book }) {
  const { title, authors, imageLinks } = book.volumeInfo;

  const shortTitle =
    title.split(" ").length > 3
      ? `${title.split(" ").slice(0, 3).join(" ")}...`
      : title;

  const shortAuthors = authors
    ? authors.length > 2
      ? `${authors.slice(0, 2).join(", ")}...`
      : authors.join(", ")
    : "Unknown Author";

  return (
    <div className={classes.bookCard}>
      <img
        className={classes.bookCard__image}
        src={imageLinks?.thumbnail}
        alt={title}
      />

      <h3 className={classes.bookCard__title}>{shortTitle}</h3>

      <p className={classes.bookCard__author}>{shortAuthors}</p>
    </div>
  );
}
