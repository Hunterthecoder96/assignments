import React, { useContext, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import PublicSurfboards from './PublicSurfboards';
import { UserContext } from '../Context/UserProvider';

function Public() {
  const { getAllSurfboards, publicSurfboards } = useContext(UserContext);
  useEffect(() => {
    getAllSurfboards();
  }, []);
  return (
    <div>
      <h4 className="subtitle">Boards from All users</h4>
      <PublicSurfboards surfboards={publicSurfboards} />
    </div>
  );
}

export default Public;
