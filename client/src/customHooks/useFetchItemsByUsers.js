import { useState, useEffect } from "react";

export default function useFetchItemsByUsers() {
  const [allInventories, setallInventories] = useState([]);

  useEffect(() => {

    async function load() {

      const users = await fetch("http://localhost:8080/users").then(res => res.json());; //users[i].id
      const allItems = await fetch(`http://localhost:8080/items/`).then(res => res.json());; //items[i].user_id

      const inventories = users.map((user) => {
        // const userItems = [];
        // for(const item of allItems) {
        //   if(item.user_id === user.id) {
        //     userItems.push(item);
        //   }
        // }
        const userItems = allItems.filter(item => item.user_id === user.id);
        return {
          userInfo: user,
          inventory: userItems
        };
      })

      setallInventories(inventories);
    }
    load();
  }, []);
  return {allInventories}
}