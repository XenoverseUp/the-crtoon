import { useEffect, useRef, useState } from "react";
import { GoSearch } from "react-icons/go";
import { usePointer } from "../../../../contexts/CustomCursorProvider";
import { revealSearchBar, hideSearchBar } from "../../animations";
import "./SearchBar.scss";

const SearchBar = () => {
  const [shouldOpen, setShouldOpen] = useState(false);
  const refs = useRef({
    wrapper: null,
    input: null,
  });

  useEffect(() => {
    if (shouldOpen) revealSearchBar(refs);
    else hideSearchBar(refs);
  }, [shouldOpen]);

  const handleSubmit = e => {
    // Handle Search
    e.preventDefault();
    refs.current.input.value = "";
    hideSearchBar(refs);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="search-bar"
      tabIndex="-1"
      onFocus={() => setShouldOpen(true)}
      onBlur={() => setShouldOpen(false)}
      ref={el => (refs.current.wrapper = el)}
    >
      <GoSearch />

      <input
        placeholder="Search Blogs"
        type="text"
        ref={el => (refs.current.input = el)}
      />
    </form>
  );
};

export default SearchBar;
