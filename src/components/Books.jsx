import React from "react";
import OneBook from "./OneBook";

const Books = ({ books }) => {
  return (
    <div className="all-books">
      <OneBook book={books[0]} />
      <OneBook book={books[1]} />
      <OneBook book={books[2]} />
      <OneBook book={books[3]} />
    </div>
  );
};

export default Books;
