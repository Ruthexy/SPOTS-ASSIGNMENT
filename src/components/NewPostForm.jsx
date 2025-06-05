import React, { useState } from 'react';

function NewPostForm({ onAddPost }) {
  const [image, setImage] = useState('');
  const [caption, setCaption] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (image && caption) {
      onAddPost({ image, caption });
      setImage('');
      setCaption('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Image URL"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />
      <input
        type="text"
        placeholder="Caption"
        value={caption}
        onChange={(e) => setCaption(e.target.value)}
      />
      <button type="submit">+ New Post</button>
    </form>
  );
}

export default NewPostForm;
