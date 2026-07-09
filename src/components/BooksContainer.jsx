import { useState, useEffect } from "react";
import fetchBooks from "../utils/API";
import BooksList from "./BooksList/BooksList";

export default function BooksContainer({ searchTerm }) {
  const [books, setBooks] = useState(null);
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState(null);

  useEffect(() => {
    if (searchTerm == "") return;
    setStatus("loading");

    fetchBooks(searchTerm)
      .then((data) => {
        setBooks(data);
        setStatus("success");
        console.log(data);
      })
      .catch((e) => {
        setError(e);
        setStatus("error");
      });
  }, [searchTerm]);

  return (
    <>
      {status === "loading" && <p>Loading books...</p>}
      {status === "success" && <BooksList books={books} />}
      {status === "error" && <p>{error.message}</p>}
    </>
  );
}
