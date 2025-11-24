// src/pages/EditProductPage.jsx
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "../styles/seller.css"; 

const EditProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    // Burada backend'den ürün bilgisi çekilecek (örnek statik veri)
    setProduct({
      id,
      name: "Pastel Defter",
      description: "Minimalist tasarımlı defter",
      price: 50,
      stock: 20,
    });
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Güncellenen ürün:", product);
    // Backend'e PUT isteği atılacak
  };

  if (!product) return <p>Yükleniyor...</p>;

  return (
    <div>
      <h2>Ürün Düzenle</h2>
      <form onSubmit={handleSubmit} className="product-form">
        <input
          type="text"
          name="name"
          value={product.name}
          onChange={handleChange}
        />
        <textarea
          name="description"
          value={product.description}
          onChange={handleChange}
        />
        <input
          type="number"
          name="price"
          value={product.price}
          onChange={handleChange}
        />
        <input
          type="number"
          name="stock"
          value={product.stock}
          onChange={handleChange}
        />
        <button type="submit">Güncelle</button>
      </form>
    </div>
  );
};

export default EditProductPage;
