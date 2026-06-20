import { useState } from "react";

export default function useDeleteItemById() {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function deleteItem(id) {
    setError("");
    setLoading(true);

    try {
      const res = await fetch(`http://localhost:8080/items/delete/${id}`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" }
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.message || "Delete failed.");
        setLoading(false);
        return null;
      }

      setLoading(false);
      return data;

    } catch (error) {
      setError("Network error.");
      setLoading(false);
      return null;
    }
  }

  return { deleteItem, error, loading };
}
