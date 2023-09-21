import React, { useEffect, useState } from 'react';
import CommentForm from './CommentForm';

function CommentContainer() {
    const [comment,setComment]=useState([])
    useEffect(()=>{
        (async()=>{
            const commentData
        })()
    },[])
  const addCommentHandler = (value, parent = null, replyOnUser = null) => {
    const newComment = {
      _id: '10',
      user: {
        _id: 'a',
        name: 'Hunter',
      },
      desc: 'this board is so good in 1-6 ft surf',
      post: '1',
      parent: null,
      replyOnUser: null,
    };
  };
  return (
    <div>
      <CommentForm formSubmitHandler={(text) => addCommentHandler(value)} />
    </div>
  );
}
