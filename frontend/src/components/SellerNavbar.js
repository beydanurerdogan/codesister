// src/components/SellerNavbar.jsx
import { useContext } from "react";
import { AuthContext } from "../store/authContext";
import { useNavigate } from "react-router-dom";
import "../styles/navbar.css";
import "../styles/seller.css"; 

export default function SellerNavbar() {
  const { logout } = useContext(AuthContext);
  const navigate = useNavigate();

  return (
    <header className="navbar">
      <div className="logo" onClick={() => navigate("/seller")}>
        PastelShop Seller
      </div>

      <div className="nav-actions">
        <button onClick={() => navigate("/seller/products")}>Ürünlerim</button>
        <button onClick={() => navigate("/seller/add-product")}>Ürün Ekle</button>
        <button onClick={() => navigate("/seller/orders")}>Siparişlerim</button>
        <button onClick={() => navigate("/seller/reports")}>Raporlar</button>
        <button onClick={() => navigate("/seller/settings")}>Ayarlar</button>
        <button onClick={logout}>Çıkış</button>
      </div>
    </header>
  );
}
