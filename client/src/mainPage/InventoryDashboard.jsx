import './styling/InventoryDashboard.css'

import { useContext } from "react";

import { InventoryContext } from "../contexts/InventoryContext";

import InventoryCard from "./InventoryCard";

export default function InventoryDashboard() {
  const { allInventories } = useContext(InventoryContext);

  return(
    <div className="inventory">
      <h2>Other Inventories</h2>
      <div className="display-inventories">
        { allInventories.map(inventory => ( <InventoryCard inventory={inventory} key={inventory.userInfo.id}/> )) }
      </div>
    </div>
  );
}