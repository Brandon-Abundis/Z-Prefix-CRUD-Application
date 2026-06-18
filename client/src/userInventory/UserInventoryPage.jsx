
import "./styling/UserInventoryPage.css"
import { useState } from "react";
import UserAddItemCard from "./UserAddItemCard";
import UserInventoryCard from "./UserInventoryCard";

import { useNavigate } from "react-router-dom";

export default function UserInventoryPage() {
  const [showAddItem, setShowAddItem] = useState(false);

  const navigate = useNavigate();

  return (
    <div className="user-inventory">
      <button className="back-button" onClick={() => navigate('/')}>Back</button>

      <button
        className="add-item-button" onClick={() => setShowAddItem(true)}>
        Add item
      </button>

      {showAddItem && (
        <div className="modal-overlay">
          <div className="modal-content">
            <UserAddItemCard onClose={() => setShowAddItem(false)} />
          </div>
        </div>
      )}

      <UserInventoryCard />
    </div>
  )
}