import React from "react";

const NoteActions = ({ onSave, onCancel, onDelete, editingId }) => {
  return (
    <div className="flex space-x-2 mt-3">
      <button
        onClick={onSave}
        className="bg-green-500 text-white px-5 py-3 rounded-lg shadow-md hover:bg-green-600 transition duration-200"
      >
        Save
      </button>
      <button
        onClick={onCancel}
        className="bg-gray-500 text-white px-5 py-3 rounded-lg shadow-md hover:bg-gray-600 transition duration-200"
      >
        Cancel
      </button>
      <button
        onClick={() => onDelete(editingId)}
        className="bg-red-500 text-white px-5 py-3 rounded-lg shadow-md hover:bg-red-600 transition duration-200"
      >
        Delete
      </button>
    </div>
  );
};

export default NoteActions;
