import { useState } from "react";

export default function BooksContainer({ searchTerm }) {
  const result = <p>{searchTerm}</p>;

  return <>{result}</>;
}
