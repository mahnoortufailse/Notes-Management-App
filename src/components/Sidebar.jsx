import React from "react";
import SearchBar from "./SearchBar";
import NoteListItem from "./NoteListItem";

const Sidebar = ({ notes, search, setSearch, filterFavorites, setFilterFavorites, handleSelectNote, toggleFavorite }) => {
  const filteredNotes = notes
    .filter((note) => note.title.toLowerCase().includes(search.toLowerCase()))
    .filter((note) => (filterFavorites ? note.favorite : true));

  return (
    <div className="w-full lg:w-1/3 bg-white shadow-lg rounded-lg p-5 overflow-y-auto max-h-screen">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">All Notes</h2>
      <SearchBar search={search} setSearch={setSearch} />

      <label className="flex items-center my-4 text-gray-700 cursor-pointer">
        <input
          type="checkbox"
          checked={filterFavorites}
          onChange={() => setFilterFavorites(!filterFavorites)}
          className="mr-2"
        />
        Show only favorites
      </label>

      {filteredNotes.length > 0 ? (
        filteredNotes.map((note) => (
          <NoteListItem key={note.id} note={note} handleSelectNote={handleSelectNote} toggleFavorite={toggleFavorite} />
        ))
      ) : (
        <p className="text-gray-500 text-center mt-4">No notes found!</p>
      )}
    </div>
  );
};

export default Sidebar;