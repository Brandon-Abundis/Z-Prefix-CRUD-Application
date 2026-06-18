import { useState } from "react";

export default function useRegister() {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function register(first_name, last_name, username, password) {
    setError("");
    setLoading(true);

    try {
      const res = await fetch("http://localhost:8080/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ first_name, last_name, username, password })
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.message || "Register failed.");
        setLoading(false);
        return null;
      }

      setLoading(false);
      return data;

    } catch (err) {
      setError("Network error.");
      setLoading(false);
      return null;
    }
  }

  return { register, error, loading };
}
