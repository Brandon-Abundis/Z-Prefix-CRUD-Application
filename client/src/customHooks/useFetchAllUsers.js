import { useState, useEffect } from "react";

export default function useFetchAllUsers() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function load() {
      try {
        const response = await fetch("http://localhost:8080/users");
        if (!response.ok) {
          throw new Error(`Fetch error: ${response.status} ${response.statusText}`);
        }
        const usersData = await response.json();
        setUsers(usersData);
      } catch (error) {
        console.error("Failed to load users:", error);
      }
    }
    load();
  }, []);

  return {users, setUsers}
}