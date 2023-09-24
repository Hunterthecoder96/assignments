import React, { useContext } from 'react';
import BoardCard from './BoardCard';
import { UserContext } from '../Context/UserProvider';

export default function publicSurfboards() {
  const { publicSurfboards } = useContext(UserContext);

  return (
    <div className="public-wrap">
      {publicSurfboards.map((surfboards) => (
        <BoardCard
          className="publicboards"
          {...surfboards}
          key={surfboards._id}
          surfboardId={surfboards._id}
        />
      ))}
    </div>
  );
}
