import React from 'react';
import './Blog.css';
import BlogPost from './BlogPost';

export default function Blog() {
  const data = {
    location: '',
    story: '',
  };
  const [form, setForm] = React.useState(data);
  const [post, setPost] = React.useState([]);

  const postMap = post.map((item, index) => (
    <BlogPost key={index} location={item.location} story={item.story} />
  ));

  function handleChange(e) {
    setForm((prevForm) => {
      console.log(e.target.value);
      return {
        ...prevForm,
        [e.target.name]: e.target.value,
      };
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setPost((prevPost) => [...prevPost, form]);
    setForm(data);
    console.log('handleSubmit', form);
  };

  return (
    <div>
      <h2>Whats The Weather Like in Your Area?</h2>
      <div className="blog">
        <input
          type="text"
          placeholder="location"
          value={form.location}
          onChange={handleChange}
          name="location"
        />
        <br />
        <div className="storyBox">
          <textarea
            type="text"
            className="story"
            required="required"
            value={form.story}
            onChange={handleChange}
            name="story"
          />
          <span>What is your Story?</span>
        </div>
        <button onClick={(e) => handleSubmit(e)}>Submit</button>

        <div className="blog">{postMap}</div>
      </div>
    </div>
  );
}
