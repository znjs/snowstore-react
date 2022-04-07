import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { CartCard, NavBar, SaveForLater } from "../../components";
import { useFilter } from "../../context";
import { clearCart } from "../../utils";

function Cart() {
  document.title = "Cart";
  const navigate = useNavigate();
  const { productsState, dispatch } = useFilter();
  const cartItems = productsState.products.filter((item) => item.cart);
  const savedItems = productsState.products.filter((item) => item.saveForLater);
  return (
    <>
      <NavBar />
      <main className="fx-row mg-2 fx-jc-sb fx-wrap">
        <div className="cart fx-grow mg-i-1">
          <div className="fx-row fx-ai-center fx-jc-sb">
            <h2>My Cart</h2>
            <p>
              <i className="fa-solid fa-location-dot f-1025 pd-i-025"></i>
              Deliver to <b>BANGALORE - 560103</b>
            </p>
          </div>
          <hr />
          <div className="cart-items fx-col fx-ai-center">
            {cartItems.length > 0 ? (
              cartItems.map((item) => <CartCard key={item._id} item={item} />)
            ) : (
              <Link to="/products">
                <div className="mg-b-8 ta-center">
                  <h1>Your Cart is Empty</h1>
                  <button className="bg-clr-yellow-300 pd-b-0625 pd-i-4 brd-sm fw-bold f-1">
                    Explore SnowStore
                  </button>
                </div>
              </Link>
            )}
          </div>
          {savedItems.length > 0 && (
            <h2>Save for Later ({savedItems.length} items)</h2>
          )}
          <div className="cart-items fx-col fx-ai-center">
            {savedItems.length > 0 &&
              savedItems.map((item) => (
                <SaveForLater item={item} key={item._id} />
              ))}
          </div>
        </div>
        <div className="cart-total w-min-24">
          <h2>
            Subtotal ({cartItems.length} Items): &nbsp; &#8377;
            {cartItems.reduce((acc, curr) => {
              return acc + parseFloat(curr.sellingPrice);
            }, 0)}
          </h2>
          <hr />
          <button
            onClick={() => navigate("/cart-summary")}
            className="w-full pd-0625 brd-sm mg-b-0625 bg-clr-yellow-300 fw-bold f-1 f-1"
          >
            Proceed to Checkout
          </button>
          <button className="w-full pd-0625 brd-sm mg-b-0625 bg-clr-yellow-300 fw-500 f-1">
            Share My cart
          </button>
          <button
            onClick={() => clearCart(dispatch)}
            className="w-full pd-0625 brd-sm mg-b-0625 bg-clr-gray-300 fw-500 f-1"
          >
            Clear My cart
          </button>
        </div>
      </main>
    </>
  );
}

export { Cart };
