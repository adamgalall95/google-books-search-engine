const API_KEY = import.meta.env.VITE_GOOGLE_BOOKS_API_KEY;

export default async function fetchBooks(searchTerm, APIKey = API_KEY) {
  const response = await fetch(
    `https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(searchTerm)}&maxResults=20&key=${APIKey}`,
  );

  if (!response.ok) {
    throw new Error("Something went wrong, couldn't find books");
  }
  return response.json();
}
