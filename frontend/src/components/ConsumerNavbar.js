// src/components/ConsumerNavbar.jsx
import { useContext } from "react";
import { AuthContext } from "../store/authContext";
import { useNavigate } from "react-router-dom";
import "../styles/navbar.css";

export default function ConsumerNavbar({ cartCount }) {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  return (
    <header className="navbar">
      <div className="logo" onClick={() => navigate("/")}>PastelShop</div>
      <input type="text" placeholder="Ürün ara..." className="search" />

      <div className="nav-actions">
        <button className="cart-btn">
          🛒 Sepet <span className="badge">{cartCount}</span>
        </button>

        {!user && (
          <button className="login-btn" onClick={() => navigate("/auth")}>
            Giriş Yap / Kayıt Ol
          </button>
        )}

        {user && (
          <div className="user-info">
            <span onClick={logout}>👤 {user.role.toUpperCase()}</span>
          </div>
        )}
      </div>
    </header>
  );
}
