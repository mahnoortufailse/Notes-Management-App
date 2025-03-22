import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addNote, editNote, deleteNote, toggleFavorite, clearNotes } from "../redux/notesSlice.js";
import { logout } from "../redux/userSlice.js";
import { v4 as uuidv4 } from "uuid";
import Sidebar from "../components/Sidebar.jsx";
import NoteForm from "../components/NoteForm.jsx";
import NoteActions from "../components/NoteActions.jsx";

const Notes = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const notes = useSelector((state) => state.notes?.notes || []);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [search, setSearch] = useState("");
  const [filterFavorites, setFilterFavorites] = useState(false);
  const [editingId, setEditingId] = useState(null);

  const handleLogout = () => {
    dispatch(clearNotes());
    dispatch(logout());
    navigate("/");
  };

  const handleSave = () => {
    if (!title.trim() || !description.trim()) return;

    if (editingId) {
      dispatch(editNote({ id: editingId, title, description }));
    } else {
      dispatch(addNote({ id: uuidv4(), title, description, favorite: false }));
    }

    setTitle("");
    setDescription("");
    setEditingId(null);
  };

  return (
    <div className="flex flex-col lg:flex-row h-screen bg-gray-100 p-4">
      {/* Sidebar */}
      <Sidebar
        notes={notes}
        search={search}
        setSearch={setSearch}
        filterFavorites={filterFavorites}
        setFilterFavorites={setFilterFavorites}
        handleSelectNote={(note) => {
          setEditingId(note.id);
          setTitle(note.title);
          setDescription(note.description);
        }}
        toggleFavorite={(id) => dispatch(toggleFavorite(id))}
      />

      {/* Main Content */}
      <div className="flex-1 p-4 bg-white shadow-lg rounded-lg flex flex-col max-w-full">
        <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4">
          <div className="flex items-center gap-3">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Manage Notes</h2>
            <img src="/images.png" alt="Notes Icon" className="h-8 w-9" />
          </div>

          <button
            onClick={handleLogout}
            className="bg-red-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-red-600 transition duration-200"
          >
            Logout
          </button>
        </div>

        <NoteForm
          title={title}
          setTitle={setTitle}
          description={description}
          setDescription={setDescription}
          handleSave={handleSave}
          isEditing={!!editingId}
        />

        {editingId && (
          <NoteActions
            onSave={handleSave}
            onCancel={() => {
              setEditingId(null);
              setTitle("");
              setDescription("");
            }}
            onDelete={() => {
              dispatch(deleteNote(editingId));
              setEditingId(null);
              setTitle("");
              setDescription("");
            }}
            editingId={editingId}
          />
        )}
      </div>
    </div>
  );
};

export default Notes;