import { useContext, useState, useEffect } from "react";
import { AuthContext } from "../store/authContext";
import ConsumerNavbar from "../components/ConsumerNavbar";
import SellerNavbar from "../components/SellerNavbar";
import AdminNavbar from "../components/AdminNavbar";
import ProductModal from "../components/ProductModal";
import "../styles/home.css";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function HomePage() {
  const { user } = useContext(AuthContext);

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [cartCount, setCartCount] = useState(0);
  const [selected, setSelected] = useState(null);
  const [showFilters, setShowFilters] = useState(false);
  const [showFav, setShowFav] = useState(false);


  // Filtre state
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [maxPrice, setMaxPrice] = useState(500);

  // Pagination
  const [page, setPage] = useState(1);
  const perPage = 8;

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setProducts([
        { id: 1, name: "Kahve", price: 50, category: "gıda", image: "/images/coffee.jpg" },
        { id: 2, name: "Kitap", price: 120, category: "kitap", image: "/images/book.jpg" },
        { id: 3, name: "Defter", price: 30, category: "kırtasiye", image: "/images/notebook.jpg" },
        { id: 4, name: "Kulaklık", price: 250, category: "elektronik", image: "/images/headphones.jpg" },
        { id: 5, name: "Çanta", price: 200, category: "aksesuar", image: "/images/bag.jpg" },
        { id: 6, name: "Mouse", price: 150, category: "elektronik", image: "/images/mouse.jpg" },
        { id: 7, name: "Telefon Kılıfı", price: 80, category: "aksesuar", image: "/images/phonecase.jpg" },
        { id: 8, name: "Kalem", price: 20, category: "kırtasiye", image: "/images/pen.jpg" },
        { id: 9, name: "Bardak", price: 40, category: "gıda", image: "/images/mug.jpg" },
        { id: 10, name: "Termos", price: 180, category: "gıda", image: "/images/thermos.jpg" },
      ]);
      setLoading(false);
    }, 800);
  }, []);

  // Filtreleme
  const filtered = products.filter(
    (p) =>
      p.name.toLowerCase().includes(search.toLowerCase()) &&
      (category === "all" || p.category === category) &&
      p.price <= maxPrice
  );

  // Pagination
  const start = (page - 1) * perPage;
  const paginated = filtered.slice(start, start + perPage);
  const totalPages = Math.ceil(filtered.length / perPage);

  const handleAddToCart = (product) => {
    if (!user || user.role !== "consumer") {
      toast.error("Sepete eklemek için giriş yapmalısınız!", {
        position: "bottom-right",
        autoClose: 3000,
        theme: "colored",
      });
      return;
    }
    setCartCount((c) => c + 1);
    toast.success(`${product.name} sepete eklendi!`, {
      position: "bottom-right",
      autoClose: 2000,
      theme: "colored",
    });
  };

  return (
  <div>
    {/* Navbar */}
    {!user && <ConsumerNavbar cartCount={cartCount} />}
    {user?.role === "consumer" && <ConsumerNavbar cartCount={cartCount} />}
    {user?.role === "seller" && <SellerNavbar />}
    {user?.role === "admin" && <AdminNavbar />}

    {/* Mobilde filtre butonu */}
<button className="mobile-toggle" onClick={() => setShowFilters(!showFilters)}>
  🔍 Filtreler
</button>
{showFilters && (
  <aside className="mobile-panel">
    <div className="filters">
      {/* filtre input/select/slider buraya */}
    </div>
  </aside>
)}

{/* Mobilde öneriler butonu */}
<button className="mobile-toggle" onClick={() => setShowFav(!showFav)}>
  ⭐ Öneriler
</button>
{showFilters && (
  <aside className="mobile-panel">
    <div className="filters">
      <input
        type="text"
        placeholder="Ürün ara..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="all">Tüm Kategoriler</option>
        <option value="gıda">Gıda</option>
        <option value="kitap">Kitap</option>
        <option value="kırtasiye">Kırtasiye</option>
        <option value="elektronik">Elektronik</option>
        <option value="aksesuar">Aksesuar</option>
      </select>
      <label>
        Max Fiyat: {maxPrice} TL
        <input
          type="range"
          min="0"
          max="500"
          value={maxPrice}
          onChange={(e) => setMaxPrice(Number(e.target.value))}
        />
      </label>
    </div>
  </aside>
)}


    {/* Sayfa düzeni */}
    <div className="page-layout">
      {/* Sol panel: Filtreler */}
      <aside className="left-panel">
        <div className="filters">
          <input
            type="text"
            placeholder="Ürün ara..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <select value={category} onChange={(e) => setCategory(e.target.value)}>
            <option value="all">Tüm Kategoriler</option>
            <option value="gıda">Gıda</option>
            <option value="kitap">Kitap</option>
            <option value="kırtasiye">Kırtasiye</option>
            <option value="elektronik">Elektronik</option>
            <option value="aksesuar">Aksesuar</option>
          </select>

          <label>
            Max Fiyat: {maxPrice} TL
            <input
              type="range"
              min="0"
              max="500"
              value={maxPrice}
              onChange={(e) => setMaxPrice(Number(e.target.value))}
            />
          </label>
        </div>
      </aside>

      {/* Orta panel: Ürünler */}
      <main className="center-panel">
        <div className="product-grid">
          {loading ? (
            Array.from({ length: perPage }).map((_, i) => (
              <div key={i} className="product-card skeleton" />
            ))
          ) : (
            paginated.map((p) => (
              <div key={p.id} className="product-card" onClick={() => setSelected(p)}>
                <img src={p.image} alt={p.name} className="product-img" />
                <strong className="product-name">{p.name}</strong>
                <p className="product-price">{p.price} TL</p>
                <button
                  className="add-btn"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleAddToCart(p);
                  }}
                >
                  Sepete Ekle
                </button>
              </div>
            ))
          )}
        </div>

        {/* Sayfalama */}
        {!loading && (
          <div className="pagination">
            <button disabled={page === 1} onClick={() => setPage(page - 1)}>Önceki</button>
            <span>Sayfa {page} / {totalPages}</span>
            <button disabled={page === totalPages} onClick={() => setPage(page + 1)}>Sonraki</button>
          </div>
        )}
      </main>

      {/* Sağ panel: Öneriler */}
      <aside className="right-panel">
        <div className="suggestion-card">
          <h3>Popüler Kategoriler</h3>
          <ul>
            <li>📚 Kitap</li>
            <li>☕ Kahve</li>
            <li>🎧 Elektronik</li>
          </ul>
        </div>
      </aside>
    </div>

    {/* Ürün detay modal */}
    <ProductModal
      product={selected}
      onClose={() => setSelected(null)}
      onAddToCart={() => selected && handleAddToCart(selected)}
    />

    <ToastContainer />
  </div>
);

}
