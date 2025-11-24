import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SellerDashboardPage from "./pages/SellerDashboardPage";
import AdminPanel from "./pages/AdminPanel";
import AuthLayout from "./pages/AuthLayout";
import NotFound from "./pages/NotFound";
import { AuthProvider, AuthContext } from "./store/authContext";
import { useContext } from "react";
import RequireAuth from "./routes/RequireAuth";
import SellerProductsPage from "./pages/SellerProductsPage";
import AddProductPage from "./pages/AddProductPage";
import SellerOrdersPage from "./pages/SellerOrdersPage";
import ReportsPage from "./pages/ReportsPage";
import SellerSettingsPage from "./pages/SellerSettingsPage";
import EditProductPage from "./pages/EditProductPage";
import OrderDetailPage from "./pages/OrderDetailPage";

function AppRoutes() {

  const { user } = useContext(AuthContext);

  return (
    <Routes>
      {/* Açılış sayfası → Consumer tarafı */}
      <Route path="/" element={<HomePage />} />

      {/* Auth sayfası */}
      <Route path="/auth" element={<AuthLayout />} />

      {/* Consumer */}
      <Route
        path="/consumer"
        element={
          <RequireAuth roles={["consumer"]}>
            <HomePage />
          </RequireAuth>
        }
      />

      {/* Seller 
      <Route
        path="/seller/*"
        element={
          <RequireAuth roles={["seller"]}>
            <SellerDashboardPage />
          </RequireAuth>
        }
      /> */}
      <Route path="/seller" element={<SellerDashboardPage />} >

       <Route path="products" element={<SellerProductsPage />} />
       <Route path="products" element={<SellerProductsPage />} />
        <Route path="add-product" element={<AddProductPage />} />
        <Route path="orders" element={<SellerOrdersPage />} />
        <Route path="reports" element={<ReportsPage />} />
        <Route path="settings" element={<SellerSettingsPage />} />
        <Route path="edit-product/:id" element={<EditProductPage />} />
        <Route path="orders/:id" element={<OrderDetailPage />} />
       



      </Route>

      {/* Admin */}
      <Route
        path="/admin/*"
        element={
          <RequireAuth roles={["admin"]}>
            <AdminPanel />
          </RequireAuth>
        }
      />

      {/* Eğer giriş yapmış kullanıcı rolüne göre otomatik yönlendirme */}
      {user && user.role === "seller" && (
        <Route path="/" element={<Navigate to="/seller" />} />
      )}
      {user && user.role === "admin" && (
        <Route path="/" element={<Navigate to="/admin" />} />
      )}

      {/* 404 */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </AuthProvider>
  );
}
