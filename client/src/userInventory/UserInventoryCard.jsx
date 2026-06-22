// import { useNavigate } from "react-router-dom";
import "./styling/UserInventoryCard.css"
import { useContext } from "react";
import useFetchItemsById from "../customHooks/useFetchItemsById";

import UserUpdateItemCard from "./UserUpdateItemCard";
import { InventoryContext } from "../contexts/InventoryContext";

export default function UserInventoryCard() {
  // const navigate = useNavigate();
  const { user } = useContext(InventoryContext);
  const { userInventory } = useFetchItemsById(user?.id);

  if(!userInventory) return <div>Loading data</div>;

  return (
    <div className="user-inventory-card">

      {userInventory.map(item => (
        <UserUpdateItemCard itemId={item.id}
        itemName={item.item_name}
        description={item.description}
        quantity={item.quantity}
        key={item.id}/>
      ))}

    </div>
  );
}