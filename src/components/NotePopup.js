import React, { useState } from 'react';

const NotePopup = ({ note, onUpdateNote, onClosePopup }) => {
  const [title, setTitle] = useState(note.title);
  const [tagline, setTagline] = useState(note.tagline);
  const [body, setBody] = useState(note.body);

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleTaglineChange = (e) => {
    setTagline(e.target.value);
  };

  const handleBodyChange = (e) => {
    setBody(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedNote = {
      ...note,
      title,
      tagline,
      body,
    };

    onUpdateNote(updatedNote);
  };

  return (
    <div className="note-popup">
      <div className="note-popup-content">
        <button className="close-button" onClick={onClosePopup}>
          &times;
        </button>
        <h2>Edit Note</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Title" value={title} onChange={handleTitleChange} required />
          <input type="text" placeholder="Tagline" value={tagline} onChange={handleTaglineChange} required />
          <textarea placeholder="Body" value={body} onChange={handleBodyChange} required />
          <button type="submit">Update</button>
        </form>
      </div>
    </div>
  );
};

export default NotePopup;
