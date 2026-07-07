import "./App.scss";
import BooksContainer from "./components/BooksContainer";
import SearchBar from "./components/SearchBar/SearchBar";
import { useState } from "react";

function App() {
  const [searchTerm, setSearchterm] = useState("");
  const handleSearch = (text) => {
    setSearchterm(text);
  };

  return (
    <div className="layout">
      <h1 className="main-heading">BOOKSY</h1>
      <h2 className="main-sub-heading">Discover your next favourite book.</h2>
      <SearchBar handleSearch={handleSearch} />
      <BooksContainer searchTerm={searchTerm} />
    </div>
  );
}

export default App;
