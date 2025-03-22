import React from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

const NoteListItem = ({ note, handleSelectNote, toggleFavorite }) => {
  return (
    <div
      className="p-3 mb-2 flex justify-between items-center cursor-pointer bg-gray-100 rounded-lg shadow-md hover:bg-gray-200 transition duration-200"
      onClick={() => handleSelectNote(note)}
    >
      <h3 className="font-semibold text-gray-800 truncate w-4/5">{note.title}</h3>
      <button
        onClick={(e) => {
          e.stopPropagation();
          toggleFavorite(note.id);
        }}
      >
        {note.favorite ? <AiFillStar className="text-yellow-500 text-xl" /> : <AiOutlineStar className="text-gray-500 text-xl" />}
      </button>
    </div>
  );
};

export default NoteListItem;
