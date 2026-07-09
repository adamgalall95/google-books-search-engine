import { useState } from "react";
import classes from "./SearchBar.module.scss";

export default function SearchBar({ handleSearch }) {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSearch(value);
  };

  return (
    <form className={classes.searchBar} onSubmit={handleSubmit}>
      <input
        className={classes.searchBar__input}
        id="search"
        name="search"
        type="text"
        placeholder="Search by title..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button>Search</button>
    </form>
  );
}
