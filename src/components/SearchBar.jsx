/* eslint-disable react/prop-types */
const SearchBar = ({ setSearchTerm }) => (
  <input
    className="searchBar"
    type="text"
    placeholder="Search tasks..."
    onChange={(e) => setSearchTerm(e.target.value)}
  />
);

export default SearchBar;
