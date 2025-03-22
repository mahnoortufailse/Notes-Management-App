import React from "react";

const NoteForm = ({ title, setTitle, description, setDescription, handleSave, isEditing }) => {
  return (
    <div className="mb-6 bg-gray-50 p-5 rounded-lg shadow-md">
      <input
        type="text"
        placeholder="Title"
        className="border p-3 w-full mb-3 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-400 outline-none"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Description"
        className="border p-3 w-full mb-3 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-400 outline-none h-24"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      ></textarea>

      <button
        onClick={handleSave}
        className={`w-full text-white px-5 py-3 rounded-lg shadow-md transition duration-200 ${isEditing ? "bg-green-500 hover:bg-green-600" : "bg-blue-500 hover:bg-blue-600"}`}
      >
        {isEditing ? "Save Changes" : "Add Note"}
      </button>
    </div>
  );
};

export default NoteForm;
