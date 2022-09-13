import "./Sort.css";

function Sort() {
  return (
      <div className="cards-sorting">
        <div className="search-container">
          <button>
            <i class="bi bi-search"></i>
          </button>
          <input type="text" placeholder="Search by business name" />
        </div>
        <div className="set-display">
          <button className="display-button"></button>
          <button className="display-button"></button>
        </div>
      </div>
  );
}

export default Sort;
