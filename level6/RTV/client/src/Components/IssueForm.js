import React, { useState, useContext } from 'react';
import { UserContext } from '../Context/UserProvider.js';

const initInputs = {
  title: '',
  description: '',
};

export default function IssueForm(props) {
  const [inputs, setInputs] = useState(initInputs);

  const { addIssue } = useContext(UserContext);

  function handleChange(e) {
    const { name, value } = e.target;
    setInputs((prevInputs) => ({
      ...prevInputs,
      [name]: value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    addIssue(inputs);
    setInputs(initInputs);
    console.log('handlesubmit');
  }

  const { title, description } = inputs;
  console.log('title', title, 'description', description);
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        value={title}
        onChange={handleChange}
        placeholder="title"
      />
      <input
        type="text"
        name="description"
        value={description}
        onChange={handleChange}
        placeholder="Issue description"
      />
      <button>Add Issue</button>
    </form>
  );
}
