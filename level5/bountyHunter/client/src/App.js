import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Bounty from './Components/Bounty';
import AddBountyForm from './Components/AddBountyForm';

function App() {
  const [bounty, setBounty] = useState([]);

  function getBounty() {
    axios
      .get('/bounties')
      .then((res) => setBounty(res.data))
      .catch((err) => console.log(err));
  }

  function addBounty(newBounty) {
    axios
      .post('/bounties', newBounty)
      .then((res) => {
        setBounty((prevBounty) => [...prevBounty, res.data]);
      })
      .catch((err) => console.log(err));
  }

  function deleteBounty(bountyId) {
    axios
      .delete(`/bounties/${bountyId}`)
      .then((res) => {
        setBounty((prevBounty) =>
          prevBounty.filter((bounty) => bounty._id !== bountyId)
        );
      })
      .catch((err) => console.log(err));
  }

  function putBounty(updates, bountyId) {
    axios
      .put(`/bounties/${bountyId}`, updates)
      .then((res) => {
        setBounty((prevBounty) =>
          prevBounty.map((bounty) =>
            bounty._id !== bountyId ? bounty : res.data
          )
        );
      })
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    getBounty();
  }, []);
  return (
    <div className="App">
      <AddBountyForm submit={addBounty} btnText="Add Bounty" />
      {bounty.map((bounty) => (
        <Bounty
          {...bounty}
          key={bounty.name}
          deleteBounty={deleteBounty}
          editBounty={putBounty}
        />
      ))}
    </div>
  );
}

export default App;
