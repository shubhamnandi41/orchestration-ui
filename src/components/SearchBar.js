import { useState } from "react";

const SearchBar = ({ onSearch }) => {
    const [query, setQuery] = useState("");

    const handleChange = (e) => {
        const value = e.target.value;
        setQuery(value);
        if (value.length >= 3) {
            onSearch(value);
        } else {
            onSearch("");
        }
    };

    return (
        <input
            type="text"
            value={query}
            onChange={handleChange}
            placeholder="Search users..."
            className="search-input"
        />
    );
};

export default SearchBar;
