import { createSlice } from "@reduxjs/toolkit";

// Helper to load notes from localStorage
const loadNotes = () => {
  const storedNotes = localStorage.getItem("notes");
  return storedNotes ? JSON.parse(storedNotes) : [];
};

const notesSlice = createSlice({
  name: "notes",
  initialState: { notes: loadNotes() },
  reducers: {
    addNote: (state, action) => {
      state.notes.push(action.payload);
      localStorage.setItem("notes", JSON.stringify(state.notes));
    },
    editNote: (state, action) => {
      const { id, title, description } = action.payload;
      const note = state.notes.find((note) => note.id === id);
      if (note) {
        note.title = title;
        note.description = description;
        localStorage.setItem("notes", JSON.stringify(state.notes));
      }
    },
    deleteNote: (state, action) => {
      state.notes = state.notes.filter((note) => note.id !== action.payload);
      localStorage.setItem("notes", JSON.stringify(state.notes));
    },
    toggleFavorite: (state, action) => {
      const note = state.notes.find((note) => note.id === action.payload);
      if (note) {
        note.favorite = !note.favorite;
        localStorage.setItem("notes", JSON.stringify(state.notes));
      }
    },
    clearNotes: (state) => {
      state.notes = [];
      localStorage.removeItem("notes");
    },
  },
});

export const { addNote, editNote, deleteNote, toggleFavorite, clearNotes } = notesSlice.actions;
export default notesSlice.reducer;
