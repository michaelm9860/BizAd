import { useState } from "react";
import Header from "../header/Header";
import SeriveSetter from "./ServiceSetter";
import "./Services.css";
import NoServices from "./NoServices";

function Services() {
  const [services, setServices] = useState([]);

  const addService = (newService) => {
    newService.id = Math.random();
    const updated = [...services, newService];
    setServices(updated);
  };

  
  const remove = (service) =>{
    const updated = services.filter(keptService => keptService.id !== service.id);
    setServices(updated);
  }

  const statusColor = (status) => {
    switch (status) {
      case "Active":
        return "active";
      case "Disabled":
        return "disabled";
    }
  };
  return (
    <>
      <Header>
        <div className="header-title">Services</div>
        <div className="header-semititle">
          Choose services that you would like to get from BizAd
        </div>
      </Header>

      <SeriveSetter addService={addService} />

      {
        services.length === 0 &&
        <NoServices/>
      }
      <div className="services-container">
        <div className="services-header">
          <span className="service-column-head" id="service-name">
            Service Name
          </span>
          <span className="service-column-head" id="service-status">
            Status
          </span>
        </div>
        {services.map((service) => (
          <div className="service" key={service.id}>
            <span>{service.service}</span>
            <span className={`status ${service.status.toLowerCase()}`}>
              {service.status}
            </span>
            <button onClick={() => remove(service)} className="remove-button">
              <i className="bi-trash3"></i>
            </button>
          </div>
        ))}
      </div>
    </>
  );
}

export default Services;
