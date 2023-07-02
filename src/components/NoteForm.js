import React, { useState } from 'react';



const NoteForm = ({ onSave, onCancel, noteToEdit }) => {
  const [note, setNote] = useState(noteToEdit || { title: '', tagline: '', body: '', pinned: false });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNote((prevNote) => ({ ...prevNote, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(note);
  };

  return (
    <form className="note-form" onSubmit={handleSubmit}>
      <input type="text" name="title" value={note.title} onChange={handleChange} placeholder="Title" />
      <input type="text" name="tagline" value={note.tagline} onChange={handleChange} placeholder="Tagline" />
      <textarea name="body" value={note.body} onChange={handleChange} placeholder="Body" />
      <div className="button-container">
        <button className="save-button" type="submit">{noteToEdit ? 'Update' : 'Save'}</button>
        <button className="cancel-button" type="button" onClick={onCancel}>Cancel</button>
      </div>
    </form>
  );
};

export default NoteForm;
