import { Route, Routes } from "react-router-dom";
import "./App.css";
import {
  Cart,
  Checkout,
  ForgotPassword,
  Home,
  SignIn,
  SignUp,
  SingleProduct,
  UserProfile,
  Wishlist,
} from "./pages";
import { ProductListing } from "./pages";
import Mockman from "mockman-js";
import { Toast } from "./components";
function MockAPI() {
  return (
    <div className="MockAPI">
      <Mockman />
    </div>
  );
}

function App() {
  return (
    <>
      <Toast />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/cart-summary" element={<Checkout />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/products" element={<ProductListing />} />
        <Route path="/products/:productId" element={<SingleProduct />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/profile" element={<UserProfile />} />
        <Route path="/mockman" element={<MockAPI />} />
      </Routes>
    </>
  );
}

export default App;
