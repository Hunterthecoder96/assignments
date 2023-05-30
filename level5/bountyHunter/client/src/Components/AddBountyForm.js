import React, { useState } from 'react';

export default function AddBountyForm(props) {
  const initInputs = {
    name: props.name || '',
    type: props.type || '',
    value: props.value || '',
  };
  const [inputs, setInputs] = useState(initInputs);

  function handleChange(e) {
    const { name, value } = e.target;
    setInputs((prevInputs) => ({ ...prevInputs, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (props.editToggle) {
      console.log('editting');
      props.editBounty(inputs, props._id);
      setInputs(initInputs);
      props.setEditToggle((prevState) => !prevState);
    } else {
      console.log('submitting');
      props.submit(inputs, props._id);
      setInputs(initInputs);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={inputs.name}
        onChange={handleChange}
        placeholder="name"
      />

      <input
        type="text"
        name="type"
        value={inputs.type}
        onChange={handleChange}
        placeholder="sith or jedi"
      />
      <input
        type="text"
        name="value"
        value={inputs.value}
        onChange={handleChange}
        placeholder="Bounty Amount"
      />
      <button>{props.btnText}</button>
    </form>
  );
}
