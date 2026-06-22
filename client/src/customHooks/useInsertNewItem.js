import { useState } from "react";

export default function useInsertNewItem() {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function insertItem(user_id, item_name, description, quantity) {
    setError("");
    setLoading(true);

    try {
      const res = await fetch("http://localhost:8080/items/create", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ user_id, item_name, description, quantity })
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.message || "Insert failed.");
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

  return { insertItem, error, loading };
}
