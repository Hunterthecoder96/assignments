import React, { useContext, useEffect } from 'react';
import { UserContext } from '../Context/UserProvider.js';
import IssueForm from './IssueForm.js';
import IssueList from './IssueList.js';

export default function Profile() {
  const {
    user: { username },
    issues,
    getUserIssue,
    addIssue,
  } = useContext(UserContext);

  useEffect(() => {
    getUserIssue();
  }, []);

  return (
    <div className="profile">
      <h1>Welcome @{username}!</h1>

      <h2>What do you want to debate today?</h2>
      <IssueForm addIssue={addIssue} />

      <h2>Your posted Issues</h2>
      <IssueList issues={issues} />
    </div>
  );
}
