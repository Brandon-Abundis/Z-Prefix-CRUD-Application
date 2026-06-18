import "./styling/NavBar.css"

import LogoutCard from "../authPage/LogoutCard";

export default function NavBar() {

  return(
    <div className="navbar">
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