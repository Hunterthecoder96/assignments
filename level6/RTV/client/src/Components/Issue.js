import React from 'react';

export default function Issue(props) {
  console.log('insideIssueCompnent');
  const { title, description } = props;
  return (
    <div>
      <h1>{title}</h1>
      <h3>{description}</h3>
    </div>
  );
}
