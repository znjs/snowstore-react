import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useFilter } from "../../context";
import { toastMessage } from "../../utils/toastMessage";
import "./product.css";

function ProductCard({
  item: {
    _id,
    wishlisted,
    imageUrl,
    altText,
    itemName,
    itemDesc,
    sellingPrice,
    costPrice,
    rating,
    category,
    cart,
  },
}) {
  const { dispatch } = useFilter();
  const JWT = localStorage.getItem("JWT_TOKEN");
  const navigate = useNavigate();
  return (
    <>
      <div className="o-hide p-rel bg-clr-gray-50 w-16 clr-gray-900 card-shadow brd-sm mg-1 fx-as-fs">
        <Link to={`/products/${_id}`}>
          <img className="card-img " src={imageUrl} alt={altText} />
        </Link>
        <div className="pd-i-0625 fx fx-col fx-jc-se">
          <div className="fx fx-jc-sb fx-ai-center">
            <Link to={`./${_id}`}>
              <h3 className="mg-b-05">{itemName}</h3>
            </Link>
            <span
              className={` clr-gray-50 brd-sm mg-b-auto pd-b-0125 pd-i-025 ${
                rating >= 3 ? "bg-clr-green-500" : "bg-clr-orange-500"
              }`}
            >
              {rating}
              <i className="fa-solid fa-star"></i>
            </span>
          </div>
          <div>({category})</div>
          <div>
            <span className="pd-i-0625 tx-lt clr-gray-500">₹{costPrice}</span>
            <span className="pd-i-0625">₹{sellingPrice}</span>
            <span className="clr-red-400">only</span>
          </div>
          <p className="f-075">{itemDesc}</p>
          <div className="fx fx-col pd-b-1 fx-jc-center fx-ai-center">
            <button
              onClick={() => {
                if (JWT) {
                  if (!cart) {
                    dispatch({ type: "ADD_TO_CART", payload: { itemId: _id } });
                    toastMessage("SUCCESS", "Product added to cart");
                  }
                } else {
                  navigate("/signin");
                }
              }}
              className="bg-clr-yellow-300 pd-05 brd-sm w-full fw-600"
            >
              <i className="fas fa-shopping-cart"></i>
              {cart ? (
                <Link to="/cart">Go to cart</Link>
              ) : (
                <span>Add To Cart</span>
              )}
            </button>
          </div>
        </div>
        <div className="p-abs bg-clr-gray-50 brd-round h-105 w-105 cr-pt top-rgt mg-05 fx fx-jc-center fx-ai-center">
          <i
            className={`${
              wishlisted ? "fa-solid" : "fa-regular"
            } fa-heart clr-red-400 `}
            onClick={() => {
              if (JWT) {
                dispatch({
                  type: "ADD_TO_WISHLIST",
                  payload: { itemId: _id },
                });
                wishlisted
                  ? toastMessage("INFO", "Product removed from wishlist")
                  : toastMessage("SUCCESS", "Product added to wishlist");
              } else navigate("/signin");
            }}
          ></i>
        </div>
      </div>
    </>
  );
}

export { ProductCard };
