import React, { useState } from 'react';
import AddBountyForm from './AddBountyForm';

export default function Bounty(props) {
  const { name, editBounty, type, value, _id } = props;
  const [editToggle, setEditToggle] = useState(false);

  return (
    <div>
      {!editToggle ? (
        <>
          <h1>{name}</h1>
          <p>{type}</p>
          <p>{value}</p>
          <button onClick={() => props.deleteBounty(_id)}>Delete</button>
          <button onClick={() => setEditToggle((prevToggle) => !prevToggle)}>
            Edit
          </button>
        </>
      ) : (
        <>
          <AddBountyForm
            name={name}
            type={type}
            value={value}
            _id={_id}
            btnText="submit edit"
            editToggle={editToggle}
            editBounty={editBounty}
            setEditToggle={setEditToggle}
          />
          <button onClick={() => setEditToggle((prevToggle) => !prevToggle)}>
            Close
          </button>
        </>
      )}
    </div>
  );
}
