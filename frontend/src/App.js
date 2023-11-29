import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Home/Homepage";
import Productdetail from "./pages/ProductDetail/Productdetail";
import Shoppingcarts_ from "./pages/card/Shoppingcarts_";
import Admin from "./pages/admin/Admin";
import UserRoute from "./util/UserRoute";
import AdminRoute from "./util/AdminRoute";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./asset/style.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.min.js";
import Register from "./pages/register/Register";
import { ShopContextProvider } from "./context/ShopContext";
import { ProductContextProvider } from "./pages/admin/context/ProductContext";

function App() {
  return (
    <div className="App">
      <ShopContextProvider>
        <Routes>
          <Route path="/" element={<Homepage></Homepage>}></Route>
          <Route
            path="/details/:id"
            element={<Productdetail></Productdetail>}
            ></Route>

          <Route element={<UserRoute />}>
            <Route path="/" element={<Homepage></Homepage>}></Route>
            <Route
              path="shoppingcarts"
              element={<Shoppingcarts_></Shoppingcarts_>}
            ></Route>
          </Route>
          <Route path="register" element={<Register></Register>}></Route>
          <Route element={<AdminRoute></AdminRoute>}>
            <Route path="admin" element={<ProductContextProvider><Admin></Admin></ProductContextProvider>}></Route>
          </Route>
        </Routes>
      </ShopContextProvider>
    </div>
  );
}

export default App;
