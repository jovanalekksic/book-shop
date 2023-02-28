import React from "react";
import CartBooks from "./CartBooks";

const Cart = ({ cartBooks, onRemove }) => {
  return (
    <div className="all-books">
      {cartBooks.map((book) => (
        <CartBooks key={book.id} book={book} onRemove={onRemove} />
      ))}
    </div>
  );
};

export default Cart;
