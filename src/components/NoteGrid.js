import React from 'react';
import Note from './Note';
import './NoteGrid.css'; 

const NoteGrid = ({ notes, onEdit, onDelete, isDarkMode }) => { 
  const handleEditClick = (note) => {
    onEdit(note);
  };

  const handleDeleteClick = (noteId) => {
    onDelete(noteId);
  };

  return (
    <div className={`note-grid ${isDarkMode ? 'dark' : 'light'}`}> 
      {notes.map((note) => (
        <Note
          key={note.id}
          note={note}
          onEdit={handleEditClick}
          onDelete={handleDeleteClick}
          isDarkMode={isDarkMode} 
        />
      ))}
    </div>
  );
};

export default NoteGrid;
