import React from "react";

const SearchBar = ({ search, setSearch }) => {
  return (
    <div className="relative mb-4">
      <input
        type="text"
        placeholder="Search notes..."
        className="border p-3 w-full rounded-lg pl-10 focus:ring-2 focus:ring-blue-400 outline-none transition-all duration-300 ease-in-out"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <svg className="absolute left-3 top-3 text-gray-400 w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.2-5.2M15 10a5 5 0 10-10 0 5 5 0 0010 0z"></path>
      </svg>
    </div>
  );
};

export default SearchBar;
