import "./styling/LoginCard.css"

import { useState, useContext } from "react";

import useLogin from "../customHooks/useLogin";
import { InventoryContext } from "../contexts/InventoryContext";
import { useNavigate } from "react-router-dom";

export default function LoginCard() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { setCurrentUser } = useContext(InventoryContext);
  const { error, loading, login } = useLogin();

  const navigate = useNavigate();

  async function handleSubmit(event) {
    event.preventDefault();

    const loggedInUser = await login(username, password);

    if (loggedInUser) {
      setCurrentUser(loggedInUser); // store globally until cookies
      navigate("/");
    }
  }

  return (
    <div className="login-card">
      <h2>Login</h2>

      {error && <p className="login-error">{error}</p>}
      {loading && <p className="login-loading">Signing in...</p>}

      <form onSubmit={handleSubmit}>
        <label>
          Username
          <input
            type="text"
            value={username}
            onChange={event => setUsername(event.target.value)}
            required
          />
        </label>

        <label>
          Password
          <input
            type="password"
            value={password}
            onChange={event => setPassword(event.target.value)}
            required
          />
        </label>

        <button type="submit" disabled={loading}>
          {loading ? "..." : "Sign In"}
        </button>
      </form>
    </div>
  );
}