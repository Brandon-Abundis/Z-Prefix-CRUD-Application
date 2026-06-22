import "./styling/UserAddItemCard.css"
import { useContext, useState } from "react";

import useInsertNewItem from "../customHooks/useInsertNewItem";
import { InventoryContext } from "../contexts/InventoryContext";

export default function UserAddItemCard({onClose }) {
  const [itemName, setItemName] = useState("");
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState("");

  const { user } = useContext(InventoryContext);
  const { insertItem, error, loading } = useInsertNewItem();

  if (!user) {
    return <p>Please log in to add items.</p>;
  }

  async function handleSubmit(event) {
    event.preventDefault();

    const itemResult = await insertItem(
      user.id,
      itemName,
      description,
      Number(quantity)
    );

    if (itemResult) {
      window.location.reload(false);
    }
  }

  return (
    <div className="add-item-card">
      {error && <p className="item-error">{error}</p>}
      {loading && <p className="item-loading">Inserting Item...</p>}


      <form onSubmit={handleSubmit}>
      <div className="modal-header">
        <h3>Add a New Item</h3>
        <button className="close-button" onClick={onClose}>X</button>
      </div>

      <div className="inputs">


        <input
          type="text"
          placeholder="Item name"
          value={itemName}
          onChange={event => setItemName(event.target.value)}
          required
        />

        <textarea
          placeholder="Description"
          value={description}
          onChange={event => setDescription(event.target.value)}
          required
        />

        <input
          type="number"
          min="0"
          placeholder="Quantity"
          value={quantity}
          onChange={event => setQuantity(event.target.value)}
          required
        />
        </div>

        <button type="submit">Add Item</button>
      </form>
    </div>
  );
}
