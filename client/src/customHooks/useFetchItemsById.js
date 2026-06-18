import { useState, useEffect } from "react";

export default function useFetchItemsById(userID) {
  const [userInventory, setUserInventory] = useState([]);

  useEffect(() => {
    if (!userID) return;
    async function load() {
    const res = await fetch(`http://localhost:8080/items/user_id/${userID}`);
      const data = await res.json();
      setUserInventory(data);
    }
    load();
  }, [userID]);
  return {userInventory}
}