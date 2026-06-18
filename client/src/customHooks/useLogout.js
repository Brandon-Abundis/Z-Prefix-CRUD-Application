import { useState } from "react";

export default function useLogout() {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function logout() {
    setError("");
    setLoading(true);

    try {
      const res = await fetch("http://localhost:8080/logout", {
        method: "POST",
        credentials: "include"
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.message || "Logout failed.");
        setLoading(false);
        return null;
      }

      setLoading(false);
      return true; // need to return something for the custom hook.

    } catch (error) {
      setError("Network error.");
      setLoading(false);
      return null;
    }
  }

  return { logout, error, loading };
}
