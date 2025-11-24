// src/pages/ProductAddPage.jsx
import React, { useState } from "react";
import "../styles/productForm.css"; // aynı form css'ini kullanıyoruz

const ProductAddPage = () => {
  const [product, setProduct] = useState({
    name: "",
    description: "",
    price: "",
    stock: "",
    category: "",
    image: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleImage = (e) => {
    setProduct({ ...product, image: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Yeni ürün eklendi:", product);
    // Backend'e POST isteği atılacak
  };

  return (
    <div className="product-edit">
      <h2>Yeni Ürün Ekle</h2>
      <form onSubmit={handleSubmit}>
        <label>Ürün Adı</label>
        <input name="name" value={product.name} onChange={handleChange} />

        <label>Açıklama</label>
        <textarea name="description" value={product.description} onChange={handleChange} />

        <label>Fiyat (₺)</label>
        <input type="number" name="price" value={product.price} onChange={handleChange} />

        <label>Stok (adet)</label>
        <input type="number" name="stock" value={product.stock} onChange={handleChange} />

        <label>Kategori</label>
        <select name="category" value={product.category} onChange={handleChange}>
          <option value="">Seçiniz</option>
          <option value="defter">Defter</option>
          <option value="kalem">Kalem</option>
          <option value="aksesuar">Aksesuar</option>
        </select>

        <label>Ürün Görseli</label>
        <input type="file" onChange={handleImage} />

        <button type="submit">Ekle</button>
      </form>
    </div>
  );
};

export default ProductAddPage;
