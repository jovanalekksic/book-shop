import React from "react";
import OneBook from "./OneBook";

//https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1566425108l/33.jpg
//https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBOPTyWGrcuwnUnRGejJbj1ARN7GpGX_XSnLkSVMvrNe7ode4E
//https://m.media-amazon.com/images/I/615ZIxEDozL.jpg
//https://www.booktopia.com.au/covers/600/9781647006747/0906/how-to-paint-without-a-brush.jpg

const Books = ({ books, onAdd, onRemove }) => {
  return (
    <div className="all-books">
      {books.map((book) => (
        <OneBook key={book.id} book={book} onAdd={onAdd} onRemove={onRemove} />
      ))}
    </div>
  );
};

export default Books;
