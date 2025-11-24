// src/components/ProductModal.jsx
import "../styles/modal.css";

export default function ProductModal({ product, onClose, onAddToCart }) {
  if (!product) return null;

  return (
    <div className="modal" role="dialog" aria-modal="true">
      <div className="modal-content">
        <button className="modal-close" onClick={onClose}>✕</button>

        <div className="modal-body">
          <div className="modal-img-wrapper">
            <img src={product.image} alt={product.name} className="modal-img" />
            <span className="discount-badge">%20 indirim</span>
          </div>
          <div className="modal-info">
            <h2 className="modal-title">{product.name}</h2>
            <p className="modal-price">{product.price} TL</p>
            <p className="modal-desc">
              Bu ürün hakkında kısa açıklama metni burada. İleride backend’den
              GET /products/:id ile detay çekilecek.
            </p>
            <ul className="modal-details">
              <li>Stok Durumu: Var</li>
              <li>Kategori: {product.category}</li>
              <li>Kargo: 2-3 gün içinde</li>
            </ul>
            <div className="modal-actions">
              <button className="add-btn" onClick={onAddToCart}>Sepete Ekle</button>
              <button className="secondary-btn">Favorilere Ekle</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
