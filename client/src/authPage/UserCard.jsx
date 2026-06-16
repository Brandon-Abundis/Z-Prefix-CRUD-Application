import { useNavigate } from "react-router-dom";
import { useContext } from "react";

import { InventoryContext } from "../contexts/InventoryContext";


export default function UserCard() {
  const navigate = useNavigate();
  const { user } = useContext(InventoryContext);

  if(!user) {
    return( // didn't use the cookie for this lol...
      <div className="login-card">
        <p>Login or create and account to modify your own inventory.</p>
        <button onClick={() => navigate('/login')}>Login</button>
      </div>
    );
  }
    return (
    <div className="user-card">
      <h2>Welcome, {user.username}</h2>
      <p>Name: {user.first_name} {user.last_name}</p>

      <button onClick={() => navigate('/modify-inventory')}>
        Modify Your Inventory
      </button>
    </div>
  );
}