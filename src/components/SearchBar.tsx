type SearchBarProps = {
    searchTerm: string;
    onSearchChange: (term: string) => void;
  };
  
  
  const SearchBar = ({searchTerm, onSearchChange}: SearchBarProps) => {

    return (
      <div className="bg-gray-200 p-4 w-full">
        <div className="flex flex-col">
          <label htmlFor="search" className="mb-2 text-2xl font-medium text-gray-700">
            Search Plants:
          </label>
          <input
            id="search"
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
            className="border border-gray-400 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 bg-white"
          />
        </div>
      </div>
    );
  };
  

export default SearchBar;
