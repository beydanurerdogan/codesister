// src/pages/SellerOrdersPage.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/seller.css"; 

const SellerOrdersPage = () => {
  const navigate = useNavigate();
  const [orders] = useState([
    { id: 1, customer: "Ayşe", product: "Pastel Defter", status: "Hazırlanıyor" },
    { id: 2, customer: "Mehmet", product: "Minimalist Kalem", status: "Kargoya Verildi" },
  ]);

  return (
    <div>
      <h2>Siparişlerim</h2>
      <table className="order-table">
        <thead>
          <tr>
            <th>Müşteri</th>
            <th>Ürün</th>
            <th>Durum</th>
            <th>Detay</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((o) => (
            <tr key={o.id}>
              <td>{o.customer}</td>
              <td>{o.product}</td>
              <td>{o.status}</td>
              <td>
                <button onClick={() => navigate(`/seller/orders/${o.id}`)}>Detay</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SellerOrdersPage;
