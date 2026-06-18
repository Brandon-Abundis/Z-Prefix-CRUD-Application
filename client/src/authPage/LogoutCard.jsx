import "./styling/LogoutCard.css"

import { useContext } from "react"
import { useNavigate } from "react-router-dom";

import { InventoryContext } from "../contexts/InventoryContext"

import useLogout from "../customHooks/useLogout";

export default function LogoutCard() {
  const { setCurrentUser, user } = useContext(InventoryContext);
  const navigate = useNavigate();

  const { logout, loading } = useLogout();

  async function handleClick(event) {
    event.preventDefault();

    const loggedOut = await logout();

    if(loggedOut) {
      setCurrentUser({});
      window.location.reload(false);
      navigate("/")
    }
  }

  if(!user) {
    return(
      <div className="login-prompt-top-right">
        <button onClick={() => navigate('/login')}>Login</button>
      </div>
    );
  }

  return(
    <div className="logout-outer">
      <div className="logout">
        <h2>Welcome, {user.username}.</h2>
        <button onClick={handleClick} disabled={loading}>
          {loading ? "Logging out..." : "logout"}
        </button>
      </div>

    </div>
  );
}