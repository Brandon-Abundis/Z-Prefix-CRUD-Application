import "./styling/UserCard.css";

import { useNavigate } from "react-router-dom";
import { useContext } from "react";

import { InventoryContext } from "../contexts/InventoryContext";
import useFetchItemsById from "../customHooks/useFetchItemsById";


export default function UserCard() {
  const navigate = useNavigate();
  const { user } = useContext(InventoryContext);
  const { userInventory } = useFetchItemsById(user?.id);

  if(!userInventory) return <div>Loading data</div>;

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
      <h2>Your inventory</h2>
      {/* <h3>{user.id}</h3> */}



      <div className="user-card-inventory">
        {userInventory.map(item => (
          <div className="user-inventory-item" key={item.id}>
            <h4>{item.item_name}</h4>
            <p>{item.quantity} total</p>
          </div>)
        )}
      </div>

      <button onClick={() => navigate('/inventory')}>
        Modify Your Inventory
      </button>
    </div>
  );
}