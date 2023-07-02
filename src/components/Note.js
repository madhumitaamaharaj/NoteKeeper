import React, { useState } from 'react';
import { RiPushpin2Line, RiPushpin2Fill } from 'react-icons/ri';
import { AiOutlineMore, AiOutlineEdit, AiOutlineDelete } from 'react-icons/ai';
import NoteForm from './NoteForm';

const Note = ({ note, onEdit, onDelete }) => {
  const { id, title, tagline, body, pinned } = note;
  const [showOptions, setShowOptions] = useState(false);
  const [editing, setEditing] = useState(false);

  const handleNoteClick = (e) => {
    e.stopPropagation();
    if (!editing) {
      onEdit(note);
    }
  };

  const handleMoreOptionsClick = (e) => {
    e.stopPropagation();
    setShowOptions(!showOptions);
  };

  const handleEditClick = (e) => {
    e.stopPropagation();
    setEditing(true);
  };

  const handleCancelEdit = () => {
    setEditing(false);
  };

  const handleSaveEdit = (editedNote) => {
    onEdit(editedNote);
    setEditing(false);
  };

  const handleDeleteClick = (e) => {
    e.stopPropagation();
    onDelete(id);
  };

  return (
    <div className={`note ${pinned ? 'pinned' : ''}`} onClick={handleNoteClick}>
      <div className="note-header">
        <h2>{title}</h2>
        {pinned ? <RiPushpin2Fill className="pin-icon" /> : <RiPushpin2Line className="pin-icon" />}
        <div className="more-options" onClick={handleMoreOptionsClick}>
          <AiOutlineMore className="more-icon" />
          {showOptions && (
            <div className="options-container">
              <div className="option" onClick={handleEditClick}>
                <AiOutlineEdit className="edit-icon" />
               
              </div>
              <div className="option" onClick={handleDeleteClick}>
                <AiOutlineDelete className="delete-icon" />
                
              </div>
            </div>
          )}
        </div>
      </div>
      <p className="note-tagline">{tagline}</p>
      <p className="note-body">{body}</p>
      {editing && (
        <NoteForm
          onSave={handleSaveEdit}
          onCancel={handleCancelEdit}
          noteToEdit={note}
        />
      )}
    </div>
  );
};

export default Note;
