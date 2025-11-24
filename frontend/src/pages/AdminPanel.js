export default function AdminPanel() {
  return (
    <div className="form-container">
      <h1>Admin Paneli</h1>
      <p>Buradan tüm kullanıcıları ve satışları yönetebilirsiniz.</p>

      <div style={{ marginTop: "20px", textAlign: "left" }}>
        <ul>
          <li>Kullanıcı Listesi</li>
          <li>Satıcı Başvuruları</li>
          <li>Satışlardan Alınan Komisyonlar</li>
          <li>Sistem Ayarları</li>
        </ul>
      </div>
    </div>
  );
}
