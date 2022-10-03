import "./Featured.css";
import Sort from "./Sort";
import { businessesList } from "./businessesData";
import Header from "../header/Header";
import { useState } from "react";

function Featured() {
  const [businesses, setBusinesses] = useState(businessesList);
  const [businessesFiltered, setBusinessesFiltered] = useState(businessesList);
  const [display, setDisplay] = useState(' grid');
  const searchByName = (filters) => {
    let result = [...businesses]
    if(filters.length > 0){
      result = businesses.filter(business =>
        business.name.toLowerCase().includes(filters.toLowerCase())
        )
    }
    setBusinessesFiltered(result)
  }
  return (
    <>
      <Header>
        <div className="header-title">BizAd</div>
        <div className="header-semititle">Addvertise your business</div>
      </Header>
      <Sort search={searchByName} setDisplay={setDisplay}/>
      <div className={`business-cards${display}`}>
        {businessesFiltered.map((business) => (
          <div key={business.id} className="card">
            <img src={business.img} alt="" />
            <div className="card-info">
              <span className="id">{business.id}</span>
              <span className="name">{business.name}</span>
              <span className="description">{business.description}</span>
              <span className="phone">
                <i className="bi bi-telephone"></i>
                {business.phone}
              </span>
              <span className="address">
                <i className="bi bi-pin-map"></i>
                {business.address}
              </span>
              <a href="#">
                <button>Visit Website</button>
              </a>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Featured;
