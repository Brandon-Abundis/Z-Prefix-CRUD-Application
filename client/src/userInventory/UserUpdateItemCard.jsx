import "./styling/UserUpdateItemCard.css"
import { useState } from "react";
import useUpdateItemById from "../customHooks/useUpdateItemById";
import DeleteConfirmation from "./DeleteConfirmtion";
// import useDeleteItemById from "../customHooks/useDeleteItemById";

export default function UserUpdateItemCard({itemId, itemName, description, quantity }) {
    const [name, setName] = useState(itemName);
    const [desc, setDesc] = useState(description);
    const [quant, setQuant] = useState(quantity);


    const [showDelete, setShowDelete] = useState(false);
    const [selectedId, setSelectedId] = useState(null);


    const { updateItem, error, loading } = useUpdateItemById();
    // const { deleteItem, errorD, loadingD } = useDeleteItemById()

    async function handleSave(event) {
      event.preventDefault();

      const itemResult = await updateItem(
        itemId,
        name,
        desc,
        Number(quant)
      );


      if (itemResult) {
        window.location.reload(false);
      }
    }

  return (
    <div className="update-item">
      <button className="delete-btn" onClick={() => { setSelectedId(itemId); setShowDelete(true); }}>
        Delete
      </button>

      {showDelete && (
        <DeleteConfirmation
          id={selectedId}
          onClose={() => setShowDelete(false)}
        />
      )}

      <input
          type="text"
          placeholder={itemName}
          value={name}
          onChange={event => setName(event.target.value)}
          required
        />

        <textarea
          placeholder={description}
          value={desc}
          onChange={event => setDesc(event.target.value)}
          required
        />

        <input
          type="number"
          min="0"
          placeholder={quantity}
          value={quant}
          onChange={event => setQuant(event.target.value)}
          required
        />
        <button className="save-button" onClick={handleSave}>Save</button>
    </div>
  )
}