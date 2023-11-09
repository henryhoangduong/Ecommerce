import Login from "./pages/Login";
import { Routes, Route,  } from "react-router-dom";
import ProductCard from "./components/Producttable";
import Homepage from "./pages/Homepage";
import Productdetail from "./pages/Productdetail";
import Shoppingcarts from "./pages/Shoppingcarts";
import Shoppingcarts_ from "./pages/Shoppingcarts_";
import Admin from "./pages/admin/Admin";
import UserRoute from "./util/UserRoute";
import AdminRoute from "./util/AdminRoute";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./asset/style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Register from "./pages/Register";

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
            element={<Shoppingcarts_></Shoppingcarts_>}
          ></Route>
        </Route>
        <Route path="register" element={<Register></Register>}></Route>

        <Route element={<AdminRoute></AdminRoute>}>
          <Route path="admin" element={<Admin></Admin>}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
