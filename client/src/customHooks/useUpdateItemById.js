import { useState } from "react";

export default function useUpdateItemById() {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function updateItem(id, item_name, description, quantity) {
    setError("");
    setLoading(true);

    try {
      const res = await fetch(`http://localhost:8080/items/update/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          item_name,
          description,
          quantity
        })
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.message || "Update failed.");
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

  return { updateItem, error, loading };
}
