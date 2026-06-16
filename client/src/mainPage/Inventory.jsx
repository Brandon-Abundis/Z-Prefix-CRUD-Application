import { useContext } from "react";

import { InventoryContext } from "../contexts/InventoryContext";

export default function Inventory() {
  const { users } = useContext(InventoryContext);

  return(
    <div className="inventory">
      <h1>{users.length}</h1>
    </div>
  );
}