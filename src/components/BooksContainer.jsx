import { useState, useEffect } from "react";
import fetchBooks from "../utils/API";
import BooksList from "./BooksList/BooksList";

export default function BooksContainer({ searchTerm }) {
  const [books, setBooks] = useState(null);
  const [totalItems, setTotalItems] = useState(0);
  const [maxResults, setMaxResults] = useState(10);
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState(null);

  function handleLoadMore() {
    setMaxResults((current) => current + 10);
  }

  useEffect(() => {
    if (!searchTerm) return;

    setStatus("loading");

    fetchBooks(searchTerm, maxResults)
      .then((data) => {
        setBooks(data);
        setTotalItems(data.totalItems);
        setStatus("success");
      })
      .catch((e) => {
        setError(e);
        setStatus("error");
      });
  }, [searchTerm, maxResults]);

  return (
    <>
      {status === "loading" && <p>Loading books...</p>}
      {status === "success" && (
        <BooksList
          books={books}
          totalItems={totalItems}
          maxResults={maxResults}
          handleLoadMore={handleLoadMore}
        />
      )}
      {status === "error" && <p>{error.message}</p>}
    </>
  );
}
