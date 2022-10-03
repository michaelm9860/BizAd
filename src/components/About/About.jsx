import { Link } from "react-router-dom";
import Header from "../header/Header";
import './About.css';

function About() {
  return (
    <>
      <Header>
        <div className="header-title">About This App</div>
        <div className="header-semititle">
          What makes BizAd the #1 app for advertising businesses
        </div>
      </Header>

      <div className="about-content">
        Every day many business owners choose to use our app to
        advertise their business and to gain more traction to their website and online store.
        <br />
        <Link to={"/services"}><button>Start Today</button></Link>
      </div>
    </>
  );
}

export default About;
