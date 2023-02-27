import React from "react";
//https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1566425108l/33.jpg
const OneBook = (props) => {
  return (
    <div className="card ms-5" style={{ width: 250 }}>
      <img
        src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1566425108l/33.jpg"
        className="card-img-top"
        alt=""
      />
      <div className="card-body">
        <h5 className="card-title">{props.bookTitle}</h5>
        <p className="card-text">{props.bookDesc}</p>
        <button type="button" className="btn btn-primary">
          Add
        </button>
        <button type="button" className="btn btn-danger">
          Remove
        </button>
      </div>
    </div>
  );
};

export default OneBook;
