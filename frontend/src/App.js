import Login from "./pages/Login";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./asset/style.css";
import ProductCard from "./components/Producttable";
import Homepage from "./pages/Homepage";
import Productdetail from "./pages/Productdetail";
import Shoppingcarts from "./pages/Shoppingcarts";
import Admin from "./pages/admin/Admin";
import "bootstrap/dist/css/bootstrap.min.css";
import { useAuth } from "./context/AuthContext";
import UserRoute from "./util/UserRoute";
import AdminRoute from "./util/AdminRoute";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage></Homepage>}></Route>
        <Route
          path="/details/:id"
          element={<Productdetail></Productdetail>}
        ></Route>
        <Route element={<UserRoute/>}>
          <Route
            path="shoppingcarts"
            element={<Shoppingcarts></Shoppingcarts>}
          ></Route>
        </Route>
        <Route element={<AdminRoute></AdminRoute>}>
          <Route path="admin" element={<Admin></Admin>}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
