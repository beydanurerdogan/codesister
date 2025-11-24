// src/pages/SellerSettingsPage.jsx
import React, { useState } from "react";
import "../styles/sellerSettings.css";

const SellerSettingsPage = () => {
  const [settings, setSettings] = useState({
    shopName: "",
    email: "",
    phone: "",
    address: "",
    theme: "light",
    notifications: true,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setSettings((s) => ({ ...s, [name]: type === "checkbox" ? checked : value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Ayarlar kaydedildi:", settings);
    // TODO: PUT /api/seller/settings
  };

  return (
    <div className="seller-settings">
      <h2>Mağaza Ayarları</h2>
      <form className="seller-settings-form" onSubmit={handleSubmit}>
        <label>Mağaza Adı</label>
        <input name="shopName" value={settings.shopName} onChange={handleChange} />

        <label>Email</label>
        <input type="email" name="email" value={settings.email} onChange={handleChange} />

        <label>Telefon</label>
        <input type="tel" name="phone" value={settings.phone} onChange={handleChange} />

        <label>Adres</label>
        <textarea name="address" value={settings.address} onChange={handleChange} />

        <label>Tema</label>
        <select name="theme" value={settings.theme} onChange={handleChange}>
          <option value="light">Açık</option>
          <option value="dark">Koyu</option>
        </select>

        <label className="checkbox">
          <input
            type="checkbox"
            name="notifications"
            checked={settings.notifications}
            onChange={handleChange}
          />
          Bildirimleri Aç
        </label>

        <button type="submit">Kaydet</button>
      </form>
    </div>
  );
};

export default SellerSettingsPage;
