import React from 'react';
import Issue from './Issue';

export default function IssueList(props) {
  const { issue } = props;
  console.log(issue);
  return (
    <div>
      {issue.map((issue) => (
        <Issue {...issue} key={issue._id} />
      ))}
      <h1>tester</h1>
    </div>
  );
}
