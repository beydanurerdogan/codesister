import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../api/auth";
import { AuthContext } from "../store/authContext";
import RegisterPage from "./RegisterPage";
import "../styles/form.css";

export default function AuthPage() {
  const [showRegister, setShowRegister] = useState(false);
  const [form, setForm] = useState({ email: "", password: "" });
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const handleLogin = async (e) => {
  e.preventDefault();

  try {
    const res = await loginUser(form); 
    // backend: { token, user: { role } }

    // Token ve user bilgilerini kaydet
    login(res.token, res.user);

    // Rol kontrolü backend’den gelen değere göre
    switch (res.user.role) {
      case "admin":
        navigate("/admin");
        break;
      case "seller":
        navigate("/seller");
        break;
      case "consumer":
        navigate("/consumer");
        break;
      default:
        alert("Geçersiz rol! Yetkisiz giriş.");
        navigate("/");
    }
  } catch (err) {
    alert("Giriş başarısız! Email veya şifre yanlış.");
  }
};


  if (showRegister) return <RegisterPage onBack={() => setShowRegister(false)} />;

  return (
    <div className="form-container">
      <h1>Giriş Yap</h1>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
        <input
          type="password"
          placeholder="Şifre"
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />
        <button type="submit">Giriş Yap</button>
      </form>
      <div className="form-link" onClick={() => setShowRegister(true)}>
        Hesabınız yok mu? Kayıt olun
      </div>
    </div>
  );
}
