import React, { useContext } from 'react';
import { UserContext } from '../Context/UserProvider';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';

export default function Issue(props) {
  const { title, description, upVotes, issueId } = props;
  const {
    likeIssue,
    unlikeIssue,
    user: { _id },
  } = useContext(UserContext);
  console.log(props);
  return (
    <div>
      <h1>{title}</h1>
      <h3>{description}</h3>
      {upVotes.includes(_id) ? (
        <div>
          <button onClick={() => unlikeIssue(issueId)}>
            <AiFillHeart />
            <span>{upVotes.length}</span>
          </button>
        </div>
      ) : (
        <div>
          <button onClick={() => likeIssue(issueId)}>
            <AiOutlineHeart />
            <span>{upVotes.length}</span>
          </button>
        </div>
      )}
    </div>
  );
}
