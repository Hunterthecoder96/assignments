import React from 'react';

export default function BadgePost(props) {
  return (
    <div>
      <h2>{props.location}</h2>
      <br />
      <p>{props.story}</p>
      <hr />
    </div>
  );
}
