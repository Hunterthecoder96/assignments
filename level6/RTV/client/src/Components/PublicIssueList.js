import React, { useContext } from 'react';
import Issue from './Issue';
import { UserContext } from '../Context/UserProvider';

export default function PublicIssueList() {
  const { publicIssues } = useContext(UserContext);
  return (
    <div>
      {publicIssues.map((issues) => (
        <Issue {...issues} key={issues._id} issueId={issues._id} />
      ))}
    </div>
  );
}
