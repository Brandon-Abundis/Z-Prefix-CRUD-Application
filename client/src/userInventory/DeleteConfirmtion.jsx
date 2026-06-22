import "./styling/DeleteConfirmation.css"
import { useEffect, useState } from "react";
import useDeleteItemById from "../customHooks/useDeleteItemById";

export default function DeleteConfirmation({ id, onClose }) {
  const [item, setItem] = useState(null);
  const [loadingItem, setLoadingItem] = useState(true);
  const [fetchError, setFetchError] = useState("");

  const { deleteItem, error, loading } = useDeleteItemById();

  // Fetch item details here, bec i am lazy to put it in a file.
  useEffect(() => {
    async function loadItem() {
      try {
        const res = await fetch(`http://localhost:8080/items/id/${id}`);
        const data = await res.json();

        if (!res.ok) {
          setFetchError(data.message || "Failed to load item.");
        } else {
          setItem(data);
        }
      } catch (error) {
        setFetchError("Network error.");
      }

      setLoadingItem(false);
    }

    loadItem();
  }, [id]);

  async function handleDelete(event) {
    event.preventDefault();

    const deleteResult = await deleteItem(Number(id));

    if (deleteResult) {
      window.location.reload(false);
    }
  }

  return (
    <div className="delete-confirm-modal">
      <div className="delete-card">
        {fetchError && <p className="delete-error">{fetchError}</p>}
        {loadingItem && <p className="delete-loading">Loading item...</p>}

        {!loadingItem && item && (
          <>
            <h2>Delete Item</h2>
            <p>Are you sure you want to delete </p>
            <p><strong>{item.item_name}</strong>?</p>

            {error && <p className="delete-error">{error}</p>}
            {loading && <p className="delete-loading">Deleting...</p>}

            <div className="delete-buttons">
              <button className="cancel-btn" onClick={onClose}>
                Cancel
              </button>

              <button className="delete-btn" onClick={handleDelete}>
                Delete
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
