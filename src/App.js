import React, { useEffect, useState } from 'react';
import NoteForm from './components/NoteForm';
import NoteGrid from './components/NoteGrid';
import Pagination from './components/Pagination';
import { FiSun, FiMoon } from 'react-icons/fi';
import api from './api';
import './style.css';

const App = () => {
  const [notes, setNotes] = useState([]);
  const [editingNote, setEditingNote] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [isDarkMode, setIsDarkMode] = useState(false); 
  const notesPerPage = 6;

  useEffect(() => {
    fetchNotes();
  }, []);

  const fetchNotes = () => {
    api.getNotes().then((data) => {
      setNotes(data);
    });
  };

  const handleEditNote = (note) => {
    setEditingNote(note);
  };

  const handleSaveNote = (note) => {
    api.saveNote(note).then(() => {
      setEditingNote(null);
      fetchNotes();
    });
  };

  const handleDeleteNote = (noteId) => {
    api.deleteNote(noteId).then(() => {
      fetchNotes();
    });
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const getPagedNotes = () => {
    const startIndex = (currentPage - 1) * notesPerPage;
    const endIndex = startIndex + notesPerPage;
    return notes.slice(startIndex, endIndex);
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`app ${isDarkMode ? 'dark' : 'light'}`}> 
      <header>
        <h1>Notekeeper</h1>
        <button className="dark-mode-toggle" onClick={toggleDarkMode}>
          {isDarkMode ? <FiSun /> : <FiMoon />}
        </button>
      </header>
      <NoteForm
        onSave={handleSaveNote}
        onCancel={() => setEditingNote(null)}
        noteToEdit={editingNote}
      />
      <NoteGrid notes={getPagedNotes()} onEdit={handleEditNote} onDelete={handleDeleteNote} />
      <Pagination
        currentPage={currentPage}
        totalPages={Math.ceil(notes.length / notesPerPage)}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default App;