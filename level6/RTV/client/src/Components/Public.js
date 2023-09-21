import React, { useContext, useEffect } from 'react';
import PublicIssueList from './PublicIssueList';
import { UserContext } from '../Context/UserProvider';

export default function Public() {
  const { getAllIssues, publicIssues } = useContext(UserContext);
  useEffect(() => {
    getAllIssues();
  }, []);
  return (
    <div>
      <h1>Pick any topic</h1>
      <PublicIssueList issues={publicIssues} />
    </div>
  );
}
