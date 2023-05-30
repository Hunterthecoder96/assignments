import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';

const UglyThingsContext = React.createContext();

function UglyThingsContextProvider(props) {
  const [inputData, setInputData] = useState({
    title: '',
    description: '',
    imgUrl: '',
  });
  const [editInputData, setEditInputData] = useState({
    title: '',
    description: '',
    imgUrl: '',
  });
  const [shouldEdit, setShouldEdit] = useState(false);
  const [data, setData] = useState([]);

  function handleChange(e, shouldEdit) {
    shouldEdit
      ? setEditInputData({ ...editInputData, [e.target.name]: e.target.value })
      : setInputData({ ...inputData, [e.target.name]: e.target.value });
  }
  function handleSubmit(e) {
    console.log('handleSubmit');
    e.preventDefault();
    axios
      .post('https://api.vschool.io/hunterskolnick/thing/', inputData)
      .then((res) => {
        console.log(res);
        setInputData({ title: '', description: '', imgUrl: '' });
        refreshPage();
      })
      .catch((error) => console.log(error));
  }

  function deleteUgly(id) {
    console.log(id);
    axios
      .delete('https://api.vschool.io/hunterskolnick/thing/' + id)
      .then((res) =>
        setData((prevData) => {
          return prevData.filter((toDo) => toDo._id !== id);
        })
      )
      .catch((err) => console.log(err));
  }

  function refreshPage() {
    return fetchData();
  }
  const fetchData = async () => {
    const result = await axios('https://api.vschool.io/hunterskolnick/thing');
    setData(
      result.data
        ? result.data.map((item) => ({ ...item, shouldEdit: false }))
        : null
    );
    console.log(result.data);
    console.log('fetchdata is working');
  };
  return (
    <UglyThingsContext.Provider
      value={{
        handleSubmit,
        handleChange,
        editInputData,
        inputData,
        shouldEdit,
        data,
        deleteUgly,
      }}
    >
      {props.children}
    </UglyThingsContext.Provider>
  );
}
export { UglyThingsContextProvider, UglyThingsContext };
