import React from "react";

function Input({ name, lable, error, ...other }) {
  return (
    <div className="mb-3 ">
      <lable htmlFor={name} className="form-lable">
        {lable}
      </lable>
      <input id={name} name={name} className="form-control" {...other} />
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
}

export default Input;
