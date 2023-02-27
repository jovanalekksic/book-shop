import React from "react";
import CartBooks from "./CartBooks";

const Cart = ({ cartBooks }) => {
  return (
    <div className="cart-container">
      {cartBooks.map((book) => (
        <CartBooks key={book.id} book={book} />
      ))}
    </div>
  );
};

export default Cart;
