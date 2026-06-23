import "./styling/NavBar.css"
import supracoders from "../../public/supra-coders-nav.png";

import LogoutCard from "../authPage/LogoutCard";

export default function NavBar() {

  return(
    <div className="navbar">
      <img src={supracoders} alt="supracoders image" style={{ width: 'auto', height: '50px', filter: 'brightness(0) invert(1)' }}/>
      <div className="center">
        <h1>Inventory System</h1>
        <p>
          <code>SupraCoder</code> Z-Prefix Application
        </p>
      </div>


      {/* // <div className="right"> */}
        <LogoutCard />
      {/* </div> */}

    </div>
  );
}