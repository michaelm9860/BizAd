import { useState } from "react";
import "./Sort.css";

function Sort(props) {
  const [search, setSearch] = useState('')
  function handleChange(e){
    props.search(e.target.value)
    setSearch(e.target.value)
  }
  return (
      <div className="cards-sorting">
        <div className="search-container">
          <label>
            <i className="bi bi-search"></i>
          </label>
          <input type="text" value={search} onChange={handleChange} placeholder="Search by business name" />
        </div>
        <div className="set-display">
          <button onClick={() => props.setDisplay(' grid')} className="display-button"><i className="bi-grid-3x3-gap-fill"></i></button>
          <button onClick={() => props.setDisplay(' list')} className="display-button"><i className="bi-list-ul"></i></button>
        </div>
      </div>
  );
}

export default Sort;
