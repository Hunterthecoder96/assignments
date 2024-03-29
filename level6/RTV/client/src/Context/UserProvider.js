import React, { useState } from 'react';
import axios from 'axios';

export const UserContext = React.createContext();

const userAxios = axios.create();

userAxios.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export default function UserProvider(props) {
  const initState = {
    user: JSON.parse(localStorage.getItem('user')) || {},
    token: localStorage.getItem('token') || '',
    issues: [],
  };

  const [userState, setUserState] = useState(initState);

  const [publicIssues, setPublicIssues] = useState([]);
  function signup(credentials) {
    axios
      .post('/auth/signup', credentials)
      .then((res) => {
        const { user, token } = res.data;
        localStorage.setItem('token', token);
        localStorage.setItem('user', JSON.stringify(user));
        setUserState((prevUserState) => ({
          ...prevUserState,
          user,
          token,
        }));
      })
      .catch((err) => console.log(err.response.data.errMsg));
  }

  function login(credentials) {
    axios
      .post('/auth/login', credentials)
      .then((res) => {
        const { user, token } = res.data;
        localStorage.setItem('token', token);
        localStorage.setItem('user', JSON.stringify(user));

        setUserState((prevUserState) => ({
          ...prevUserState,
          user,
          token,
        }));
      })
      .catch((err) => console.log(err.response.data.errMsg));
  }

  function logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setUserState({
      user: {},
      token: '',
      issues: [],
    });
  }
  function handleAuthErr(errMsg) {
    setUserState((prevState) => ({
      ...prevState,
      errMsg,
    }));
  }

  function resetAuthErr() {
    setUserState((prevState) => ({
      ...prevState,
      errMsg: '',
    }));
  }
  function getAllIssues() {
    userAxios
      .get('/api/issue')
      .then((res) => setPublicIssues(res.data))
      .catch((err) => console.log(err));
  }

  function getUserIssue() {
    userAxios
      .get('/api/issue/user')
      .then((res) => {
        setUserState((prevState) => ({
          ...prevState,
          issues: res.data,
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
          issues: [...prevState.issues, res.data],
        }));
      })
      .catch((err) => console.log(err.response.data.errMsg));
  }

  function likeIssue(issueId) {
    userAxios
      .put(`/api/public/like/${issueId}`)
      .then((res) => {
        setUserState((prevUserState) => ({
          ...prevUserState,
          posts: prevUserState.issues.map((issue) =>
            issueId !== issue._id ? issue : res.data
          ),
        }));
        setPublicIssues((prevIssues) =>
          prevIssues.map((issue) => (issue._id !== issueId ? issue : res.data))
        );
      })
      .catch((err) => console.log(err));
  }

  function unlikeIssue(issueId) {
    userAxios
      .put(`/api/public/dislike/${issueId}`)
      .then((res) => {
        setUserState((prevUserState) => ({
          ...prevUserState,
          posts: prevUserState.issues.map((issue) =>
            issueId !== issue._id ? issue : res.data
          ),
        }));
        setPublicIssues((prevIssues) =>
          prevIssues.map((issue) => (issue._id !== issueId ? issue : res.data))
        );
      })
      .catch((err) => console.log(err));
  }

  return (
    <UserContext.Provider
      value={{
        ...userState,
        signup,
        login,
        logout,
        handleAuthErr,
        resetAuthErr,
        getAllIssues,
        getUserIssue,
        addIssue,
        likeIssue,
        unlikeIssue,
        publicIssues,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
}
