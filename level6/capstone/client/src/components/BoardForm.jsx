import React, { useState, useContext } from 'react';
import { UserContext } from '../Context/UserProvider';

const initInputs = {
  shaper: '',
  model: '',
  size: '',
  image: '',
};

export default function BoardForm(props) {
  const [inputs, setInputs] = useState(initInputs);

  const { addBoard } = useContext(UserContext);

  function handleChange(e) {
    const { name, value } = e.target;
    setInputs((prevInputs) => ({
      ...prevInputs,
      [name]: value,
    }));
  }
  function handleSubmit(e) {
    e.preventDefault();
    addBoard(inputs);
    setInputs(initInputs);
  }

  const { shaper, model, size, image } = inputs;

  return (
    <form className="boardForm-container" onSubmit={handleSubmit}>
      <p>Shaper:</p>
      <input
        type="text"
        name="shaper"
        placeholder="shaper"
        value={shaper}
        onChange={handleChange}
      />
      <p>Model:</p>
      <input
        type="text"
        name="model"
        value={model}
        onChange={handleChange}
        placeholder="model"
      />
      <p>Size:</p>
      <input
        type="text"
        name="size"
        value={size}
        onChange={handleChange}
        placeholder="size"
      />
      <p>Photo of board:</p>
      <input
        type="file"
        name="image"
        value={image}
        onChange={handleChange}
        placeholder="URL"
      />

      <button>Submit</button>
    </form>
  );
}
