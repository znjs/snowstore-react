import React from "react";
import { Link } from "react-router-dom";
import { NavBar, WishlistCard } from "../../components";
import { useFilter } from "../../context";
import "./wishlist.css";

function Wishlist() {
  document.title = "Wishlist";
  const { productsState } = useFilter();
  const wishlistItems = productsState.products.filter((ele) => ele.wishlisted);
  return (
    <>
      <NavBar />
      <main className="fx-row fx-wrap fx-jc-sb mg-2">
        <div className="cart fx-grow mg-i-1">
          <div className="fx-row fx-ai-center fx-jc-sb">
            <h2>Wishlist</h2>
            <p>
              <i className="fa-solid fa-location-dot f-1025 pd-i-025"></i>
              Deliver to <b>BANGALORE - 560103</b>
            </p>
          </div>
          <hr />
          {wishlistItems.length ? (
            wishlistItems.map((item) => {
              return <WishlistCard key={item._id} item={item} />;
            })
          ) : (
            <h1>No items in Wishlist</h1>
          )}
        </div>
        <div className="cart-total w-min-24 ">
          <h2>Total items ({wishlistItems.length} Items)</h2>
          <hr />
          <Link to="/cart">
            <button className="w-full pd-0625 brd-sm mg-b-0625 bg-clr-yellow-300 fw-500 f-1">
              Goto cart
            </button>
          </Link>
        </div>
      </main>
    </>
  );
}

export { Wishlist };
