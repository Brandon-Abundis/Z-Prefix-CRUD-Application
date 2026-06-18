import './styling/LoginPage.css'

import { Link } from "react-router-dom";

import LoginCard from "./LoginCard";

export default function LoginPage() {
  return(
    <div className="login">
      <LoginCard />

      <div className="login-bottom-link">
        <p>
          Don't have an account?{" "}<Link to="/register">Register here</Link>
        </p>
      </div>
    </div>
  );
}