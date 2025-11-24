import React from "react";
import AuthPage from "./AuthPage";
import "../styles/form.css";

export default function AuthLayout() {
  return (
    <div className="auth-layout">
      <div className="auth-left">
        <div className="side-wrap">
            <img src="/images/marketplace-logo.png" alt="Sol görsel" className="side-image" />
        </div>
      </div>

      <div className="auth-right">
        <AuthPage />
      </div>
    </div>
  );
}

