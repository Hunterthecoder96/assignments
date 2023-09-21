import React, { useState } from 'react';

export default function CommentForm({ formSubmitHandler }) {
  const [value, setValue] = useState('');
  function submitHandler(e) {
    e.preventDefault();
    formSubmitHandler(value);
    setValue('');
  }

  return (
    <form onSubmit={submitHandler}>
      <div>
        <textarea
          className="comment-textArea"
          classrows="5"
          placeholder="Leave your comment here..."
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button type="submit">send</button>
      </div>
    </form>
  );
}
