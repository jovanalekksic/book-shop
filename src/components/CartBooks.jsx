import React from "react";
//https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1566425108l/33.jpg
const CartBooks = ({ book }) => {
  return (
    <div className="card ms-5" style={{ width: 250 }}>
      <img
        src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1566425108l/33.jpg"
        className="card-img-top"
        alt=""
      />
      <div className="card-body">
        <h5 className="card-title">{book.title}</h5>
        <p className="card-text">{book.description}</p>
        <div className="card-footer text-muted">
          <p>{book.author}</p>
        </div>
        <h3>Amount: {book.amount} </h3>
      </div>
    </div>
  );
};

export default CartBooks;
