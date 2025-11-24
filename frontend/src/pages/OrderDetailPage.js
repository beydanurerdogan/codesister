// src/pages/OrderDetailPage.jsx
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "../styles/orderDetail.css"; // ayrı CSS dosyası

const OrderDetailPage = () => {
  const { id } = useParams();
  const [order, setOrder] = useState(null);

  useEffect(() => {
    // Backend'den sipariş bilgisi çekilecek (örnek statik veri)
    setOrder({
      id,
      customer: "Ayşe Yılmaz",
      email: "ayse@example.com",
      address: "Gebze, Kocaeli",
      product: "Pastel Defter",
      quantity: 2,
      total: 100,
      status: "Hazırlanıyor",
      payment: "Kredi Kartı",
      shipping: { company: "Yurtiçi Kargo", tracking: "ABC123456" },
      date: "2025-11-20",
    });
  }, [id]);

  const handleStatusChange = (status) => {
    setOrder({ ...order, status });
    console.log("Sipariş durumu güncellendi:", status);
  };

  if (!order) return <p>Yükleniyor...</p>;

  return (
    <div className="order-detail">
      <h2>Sipariş #{order.id}</h2>

      <div className="detail-card">
        <h3>Müşteri Bilgileri</h3>
        <p><strong>Ad:</strong> {order.customer}</p>
        <p><strong>Email:</strong> {order.email}</p>
        <p><strong>Adres:</strong> {order.address}</p>
      </div>

      <div className="detail-card">
        <h3>Ürün Bilgileri</h3>
        <p><strong>Ürün:</strong> {order.product}</p>
        <p><strong>Adet:</strong> {order.quantity}</p>
        <p><strong>Toplam:</strong> {order.total} ₺</p>
      </div>

      <div className="detail-card">
        <h3>Sipariş Bilgileri</h3>
        <p><strong>Tarih:</strong> {order.date}</p>
        <p><strong>Ödeme:</strong> {order.payment}</p>
        <p><strong>Kargo:</strong> {order.shipping.company} (Takip: {order.shipping.tracking})</p>
        <p>
          <strong>Durum:</strong>{" "}
          <span className={`status-badge status-${order.status.toLowerCase().replace(/\s+/g, "-")}`}>
            {order.status}
          </span>

        </p>
      </div>

      <div className="actions">
        <button onClick={() => handleStatusChange("Kargoya Verildi")}>Kargoya Ver</button>
        <button onClick={() => handleStatusChange("Teslim Edildi")}>Teslim Et</button>
        <button onClick={() => handleStatusChange("İptal Edildi")}>İptal Et</button>
      </div>
    </div>
  );
};

export default OrderDetailPage;
