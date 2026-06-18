import "./styling/RegisterCard.css"

import { useState } from "react";
import { useNavigate } from "react-router-dom";

import useRegister from "../customHooks/useRegister";

// import { InventoryContext } from "../contexts/InventoryContext";

export default function RegisterCard() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { register, error, loading } = useRegister();

  const navigate = useNavigate();

  async function handleSubmit(event) {
    event.preventDefault();

    const registeredUser = await register(firstName, lastName, username, password);

    if(registeredUser) {
      navigate("/login"); // send person back to login page.
    }
  }

  return (
    <div className="register-card">
      <h2>Register</h2>

      {error && <p className="register-error">{error}</p>}
      {loading && <p className="register-loading">Signing in...</p>}

      <form onSubmit={handleSubmit}>
        <label>
          First Name
          <input
            type="text"
            value={firstName}
            onChange={event => setFirstName(event.target.value)}
            required
          />
        </label>

        <label>
          Last Name
          <input
            type="text"
            value={lastName}
            onChange={event => setLastName(event.target.value)}
            required
          />
        </label>

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
          {loading ? "..." : "Submit"}
        </button>
      </form>
    </div>
  )
}