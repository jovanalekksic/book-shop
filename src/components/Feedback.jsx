import React from "react";
import { useState } from "react";

const Contact = () => {
  const [name, setName] = useState("");
  const [form, setForm] = useState("");
  const handleName = (event) => {
    setName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(name + " you successfully sent your feedback.");
    initialState();
    resetForm();
  };

  const initialState = () => {
    setForm("");
  };

  const resetForm = () => {
    document.getElementById("forma").reset();
  };

  return (
    <form className="form" onSubmit={handleSubmit} id="forma">
      <div className="mb-3">
        <label htmlFor="NameSurname" className="form-label">
          Name
        </label>
        <input
          placeholder="ex. Petar Petrovic"
          className="form-control"
          id="exampleInputNameSurname1"
          type="text"
          name="name"
          value={name}
          onChange={handleName}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">
          Email address
        </label>
        <input
          type="email"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          name="email"
        />
        <div id="emailHelp" className="form-text">
          We'll never share your email with anyone else.
        </div>
      </div>
      <div className="form-floating">
        <textarea
          className="form-control"
          placeholder="Leave a comment here"
          id="floatingTextarea"
          name="comment"
        ></textarea>

        <label htmlFor="floatingTextarea" className="form-label">
          Comments
        </label>
      </div>

      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default Contact;
