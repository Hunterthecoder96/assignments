import React, { useState } from 'react';

const UserContext = React.createContext();

function UserProvider(props) {
  const [data, setData] = useState([]);
  const [location, setLocation] = useState('');
  const [testData, setTestData] = useState('');

  function addLocation(location) {
    setLocation(location);
  }
  console.log('context:', testData);
  return (
    <UserContext.Provider value={{ testData, addLocation, data, location }}>
      {props.children}
    </UserContext.Provider>
  );
}
export { UserProvider, UserContext };
