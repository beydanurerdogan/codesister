import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/sellerProduct.css";

const SellerProductPage = () => {
  const [products, setProducts] = useState([
    { id: 1, name: "Pastel Defter", price: 50, stock: 20 },
    { id: 2, name: "Minimalist Kalem", price: 15, stock: 100 },
    { id: 3, name: "Mor Tonlu Ajanda", price: 120, stock: 15 },
  ]);

  const navigate = useNavigate(); // ✅ burada tanımlanmalı

  const handleEdit = (id) => {
    navigate(`/seller/products/edit/${id}`);
  };

  const handleDelete = (id) => {
    setProducts(products.filter((p) => p.id !== id));
  };

  return (
    <div className="seller-products">
      <h2>Ürünlerim</h2>
      <table className="seller-products-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Ürün Adı</th>
            <th>Fiyat</th>
            <th>Stok</th>
            <th>İşlemler</th>
          </tr>
        </thead>
        <tbody>
          {products.map((p) => (
            <tr key={p.id}>
              <td>{p.id}</td>
              <td>{p.name}</td>
              <td>{p.price} ₺</td>
              <td>{p.stock}</td>
              <td>
                <div className="action-buttons">
                  <button className="edit-btn" onClick={() => handleEdit(p.id)}>
                    Düzenle
                  </button>
                  <button
                    className="delete-btn"
                    onClick={() => handleDelete(p.id)}
                  >
                    Sil
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SellerProductPage;
