import React from "react";
import OneBook from "./OneBook";

const Books = () => {
  const title = "Book title";
  const description =
    "New book description that we got from Books component using props.";

  return (
    <div className="all-books">
      <OneBook bookTitle={title} bookDesc={description} />
      <OneBook bookTitle={title} bookDesc={description} />
      <OneBook bookTitle={title} bookDesc={description} />
    </div>
  );
};

export default Books;
