import { useState } from "react";

export default function useLogin() {
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // this was actually impossible to do by myslef, like i have no idea that cookies hate me like this.
  async function login(username, password) {
    setLoading(true);
    setError("");

    try {
      const res = await fetch("http://localhost:8080/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include", // this line cuased a lot of issues.
        body: JSON.stringify({ username, password })
      });

      const data = await res.json();

      if (!res.ok) { // like how tf was i supposed to know to use this...
        setError(data.message || "Login failed.");
        setLoading(false);
        return null;
      }

      setUser(data);
      setLoading(false);
      return data;

    } catch (error) {
      setError("Network error."); // too many iterations to avoid this catch.
      setLoading(false);
      return null;
    }
  }

  return { user, error, loading, login }; // literally just return evryting and see what happens.
}
