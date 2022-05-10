import React from "react";

export default function AddItem({ create }) {
  const [value, setValue] = React.useState("");
  function submitHandler(event) {
    event.preventDefault();
    if (value.trim()) {
      create(value);
      setValue("");
    }
  }
  return (
    <form class="form" onSubmit={submitHandler}>
      <input
        class="form-input"
        maxlength="70"
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
      <button class="form-button">Add todo</button>
    </form>
  );
}
