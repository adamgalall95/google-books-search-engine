import { useState, useEffect } from "react";
import fetchBooks from "../utils/API";

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
      {status === "success" && (
        <ul>
          {books.items.map((book) => (
            <li key={book.id}>
              <h3>{book.volumeInfo.title}</h3>
              <p>
                {book.volumeInfo.authors
                  ? book.volumeInfo.authors.join(", ")
                  : "No Author"}
              </p>
            </li>
          ))}
        </ul>
      )}
      {status === "error" && <p>{error.message}</p>}
    </>
  );
}
