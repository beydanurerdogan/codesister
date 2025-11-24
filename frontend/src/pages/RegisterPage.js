import { useState } from "react";

export default function RegisterPage({ onBack }) {
  const [role, setRole] = useState("");
  const [form, setForm] = useState({});
  const [accepted, setAccepted] = useState(false);
  const [showTerms, setShowTerms] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (role === "seller" && !accepted) {
      setError("Satıcı olma şartlarını kabul etmelisiniz!");
      return;
    }
    setError("");
    console.log("Kayıt:", role, form);
    // Burada API çağrısı yapılacak
  };

  return (
    <div className="form-container">
      <h1>Kayıt Ol</h1>

      {!role ? (
        <>
          <p>Devam etmek için rolünüzü seçin:</p>
          <div className="role-buttons">
            <button onClick={() => setRole("consumer")}>Tüketici</button>
            <button onClick={() => setRole("seller")}>Satıcı</button>
          </div>
          <div className="form-link" onClick={onBack}>← Geri dön</div>
        </>
      ) : (
        <form onSubmit={handleSubmit}>
          {role === "consumer" && (
            <>
              <input placeholder="Ad" onChange={(e) => setForm({ ...form, firstName: e.target.value })} />
              <input placeholder="Soyad" onChange={(e) => setForm({ ...form, lastName: e.target.value })} />
              <input type="email" placeholder="Email" onChange={(e) => setForm({ ...form, email: e.target.value })} />
              <input type="password" placeholder="Şifre" onChange={(e) => setForm({ ...form, password: e.target.value })} />
            </>
          )}

          {role === "seller" && (
            <>
              <input placeholder="Mağaza Adı" onChange={(e) => setForm({ ...form, storeName: e.target.value })} />
              <input placeholder="Vergi No" onChange={(e) => setForm({ ...form, taxId: e.target.value })} />
              <input type="email" placeholder="Email" onChange={(e) => setForm({ ...form, email: e.target.value })} />
              <input type="password" placeholder="Şifre" onChange={(e) => setForm({ ...form, password: e.target.value })} />

              {/* Şartlar linki */}
              <div className="form-link" onClick={() => setShowTerms(true)}>
                Satıcı olma şartlarını oku
              </div>

              {/* Hata mesajı */}
              {error && <div className="error-message">{error}</div>}
            </>
          )}

          <button type="submit">Kayıt Ol</button>
          <div className="form-link" onClick={onBack}>← Geri dön</div>
        </form>
      )}

      {/* Modal */}
      {showTerms && (
        <div className="modal-overlay">
          <div className="modal">
            <h2>Satıcı Olma Şartları</h2>
            <ul>
              <li>Geçerli vergi numarası bulunmalı</li>
              <li>Ürünler yasal ve orijinal olmalı</li>
              <li>Müşteri memnuniyetine önem verilmeli</li>
              <li>Platform kurallarına uyulmalı</li>
            </ul>
            <label>
              <input
                type="checkbox"
                checked={accepted}
                onChange={(e) => setAccepted(e.target.checked)}
              />
              Okudum, anladım ve kabul ediyorum
            </label>
            <button onClick={() => setShowTerms(false)}>Kapat</button>
          </div>
        </div>
      )}
    </div>
  );
}
