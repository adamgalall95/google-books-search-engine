import classes from "./BookModal.module.scss";

export default function BookModal({ book, onClose }) {
  const { title, authors, description, publishedDate, categories } =
    book.volumeInfo;

  return (
    <div className={classes.bookModal__overlay}>
      <div className={classes.bookModal}>
        <button className={classes.bookModal__close} onClick={onClose}>
          Close
        </button>
        <h2 className={classes.bookModal__title}>{title}</h2>

        <p className={classes.bookModal__info}>
          By: {authors?.join(", ") || "Unknown"}
        </p>

        <p className={classes.bookModal__info}>
          Published: {publishedDate || "Unknown"}
        </p>

        <p className={classes.bookModal__info}>
          Genre: {categories?.join(", ") || "Unknown"}
        </p>

        <p className={classes.bookModal__description}>
          {description || "No description available"}
        </p>
      </div>
    </div>
  );
}
