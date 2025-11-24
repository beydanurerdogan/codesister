// src/pages/SellerDashboardPage.jsx
import React from "react";
import { Outlet } from "react-router-dom";
import SellerNavbar from "../components/SellerNavbar";
import "../styles/dashboard.css"; // özel stil

const SellerDashboardPage = () => {
  return (
    <div>
      <SellerNavbar />
      <main className="dashboard">
        <h2>Satıcı Paneli</h2>
        <p className="welcome-text">Hoş geldiniz! İşte mağazanızın genel görünümü 👇</p>

        {/* Özet Kartlar */}
        <div className="summary-cards">
          <div className="card">
            <h3>Ürün Sayısı</h3>
            <p>12</p>
          </div>
          <div className="card">
            <h3>Toplam Sipariş</h3>
            <p>34</p>
          </div>
          <div className="card">
            <h3>Toplam Kazanç</h3>
            <p>₺ 4.560</p>
          </div>
        </div>

        {/* Grafik Alanı */}
        <div className="chart-section">
          <h3>Satış Trendleri</h3>
          <img src="https://via.placeholder.com/600x300?text=Grafik+Alanı" alt="grafik" />
          {/* Burada Recharts veya Chart.js ile gerçek grafik gelecek */}
        </div>

        {/* Alt sayfalar için outlet */}
        <Outlet />
      </main>
    </div>
  );
};

export default SellerDashboardPage;
