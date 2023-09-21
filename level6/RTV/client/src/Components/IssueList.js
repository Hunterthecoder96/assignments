import React from 'react';
import Issue from './Issue';

export default function IssueList(props) {
  const { issues } = props;

  return (
    <div>
      {issues.map((issues) => (
        <Issue {...issues} key={issues._id} issueId={issues._id} />
      ))}
    </div>
  );
}
