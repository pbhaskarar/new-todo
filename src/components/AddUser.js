import React from "react";
import '../style.css'
export const AddUser = ({ onAdd }) => {
  const handleOnSubmit = (evt) => {
    evt.preventDefault();
    onAdd(evt.target.name.value, evt.target.email.value);
    evt.target.name.value = "";
    evt.target.email.value = "";
  };

  return (
    <form onSubmit={handleOnSubmit}>
      <h3 className="user-add">Add User</h3>
      <input className="inputfield" placeholder="Name" name="name" />
      <input className="inputfield" placeholder="Email" name="email" />
      <button className="btns" onSubmit={handleOnSubmit}>Add</button>
      <hr />
    </form>
  );
};
