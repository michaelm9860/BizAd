import { useState } from "react";
import "./ServiceSetter.css";

function SeriveSetter(props) {
  const [service, setService] = useState("Mailing List");
  const [status, setStatus] = useState("Active");

  const add = () =>{
    props.addService({
        service: service,
        status: status
    })
  }

  return (
    <div className="setter-container">
      <label>Service Name:</label>
      <select value={service} onChange={(e) => setService(e.target.value)}>
        <option value="Mailing List">Mailing List</option>
        <option value="Whatsapp Group Notifications">Whatsapp Group Notifications</option>
        <option value="Youtube Ads">Youtube Ads</option>
      </select>
      <label>Status:</label>
      <select value={status} onChange={(e) => setStatus(e.target.value)}>
        <option value="Active">Active</option>
        <option value="Disabled">Disabled</option>
      </select>
      <button className="add-button" onClick={add}>Add Service</button>
    </div>
  );
}

export default SeriveSetter;
