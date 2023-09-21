import React, { useState } from 'react';
import axios from 'axios';

export const IssueContext = React.createContext();
const userAxios = axios.create();

export default function IssueProvider(){

function getAllIssues() {
  userAxios
    .get('/api/issue')
    .then((res) => {
      setUserState((prevState) => ({
        ...prevState,
        issue: res.data,
      }));
    })
    .catch((err) => console.log(err.response.data.errMsg));
}

function getUserIssue() {
  userAxios
    .get('/api/issue/user')
    .then((res) => {
      setUserState((prevState) => ({
        ...prevState,
        issue: res.data,
      }));
    })
    .catch((err) => console.log(err.response.data.errMsg));
}

function addIssue(newIssue) {
  userAxios
    .post('/api/issue/user', newIssue)
    .then((res) => {
      setUserState((prevState) => ({
        ...prevState,
        issue: [...prevState.issue, res.data],
      }));
    })
    .catch((err) => console.log(err.response.data.errMsg));
}

function getAllIssues() {
  userAxios
    .get('/api/issue')
    .then((res) => {
      setUserState((prevState) => ({
        ...prevState,
        issue: res.data,
      }));
    })
    .catch((err) => console.log(err.response.data.errMsg));
}

return (
    <IssueContext.Provider
      value={{
        getAllIssues,
        addIssue,
        getUserIssue,
      }}
    >
      {props.children}
    </IssueContext.Provider>
  );
}