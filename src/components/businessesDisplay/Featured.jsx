import "./Featured.css";
import Sort from "./Sort";

function Featured() {
  return (
    <>
      <Sort />
      <div className="business-cards">
        <div className="card">
          <img
            src="https://images.pexels.com/photos/905847/pexels-photo-905847.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
          />
          <div className="card-info">
            <span className="id">12345</span>
            <span className="name">Pizza Palazzo</span>
            <span className="description">
              A place to eat pizza, fancy Italian name
            </span>
            <span className="phone">
              <i className="bi bi-telephone"></i>
                08-12332112
            </span>
            <span className="address">
              <i className="bi bi-pin-map"></i>
                Somewhere, Over The Rainbow
            </span>
            <button>
                Visit Website
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Featured;
