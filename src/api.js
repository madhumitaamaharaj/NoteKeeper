const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const notes = [
  { id: 1, title: 'Note 1', tagline: 'Tagline 1', body: 'Body 1', pinned: false },
  { id: 2, title: 'Note 2', tagline: 'Tagline 2', body: 'Body 2', pinned: false },
  { id: 3, title: 'Note 3', tagline: 'Tagline 3', body: 'Body 3', pinned: false },
  { id: 4, title: 'Note 4', tagline: 'Tagline 4', body: 'Body 4', pinned: false },
  { id: 5, title: 'Note 5', tagline: 'Tagline 5', body: 'Body 5', pinned: false },
  { id: 6, title: 'Note 6', tagline: 'Tagline 6', body: 'Body 6', pinned: false },
  { id: 7, title: 'Note 7', tagline: 'Tagline 7', body: 'Body 7', pinned: false },
  { id: 8, title: 'Note 8', tagline: 'Tagline 8', body: 'Body 8', pinned: false },
  { id: 9, title: 'Note 9', tagline: 'Tagline 9', body: 'Body 9', pinned: false },
  { id: 10, title: 'Note 10', tagline: 'Tagline 10', body: 'Body 10', pinned: false },
  { id: 11, title: 'Note 11', tagline: 'Tagline 11', body: 'Body 11', pinned: false },
  { id: 12, title: 'Note 12', tagline: 'Tagline 12', body: 'Body 12', pinned: false },
];

const getNotes = () => delay(500).then(() => notes);

const addNote = (note) => {
  const newNote = { ...note, id: notes.length + 1 };
  notes.push(newNote);
  return delay(500).then(() => newNote);
};

const updateNote = (note) => {
  const index = notes.findIndex((n) => n.id === note.id);
  notes[index] = note;
  return delay(500).then(() => note);
};

const deleteNote = (noteId) => {
  const index = notes.findIndex((note) => note.id === noteId);
  notes.splice(index, 1);
  return delay(500).then(() => true);
};

const api = {
  getNotes,
  addNote,
  updateNote,
  deleteNote,
};

export default api;
