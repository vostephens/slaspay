import React from "react";
import { CiSearch } from "react-icons/ci";

interface SearchInputProps {
  placeholder?: string;
  className?: string;
}

const SearchInput: React.FC<SearchInputProps> = ({ placeholder, className }) => {
  return (
    <div className={`relative ${className}`}>
      <input
        type="text"
        placeholder={placeholder}
        className="border rounded-md pl-10 pr-4 py-2 focus:outline-none focus:ring focus:border-blue-300"
      />
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <CiSearch className="text-gray-400" />
      </div>
    </div>
  );
};

export default SearchInput;
