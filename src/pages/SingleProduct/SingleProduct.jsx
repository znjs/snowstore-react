import React from "react";
import { Link, useParams } from "react-router-dom";
import { NavBar } from "../../components";
import { useFilter } from "../../context";
import { toastMessage } from "../../utils/toastMessage";

function SingleProduct() {
  const { productId } = useParams();
  const { productsState, dispatch } = useFilter();
  const [product] = productsState.products.filter(
    (ele) => ele._id === productId
  );
  const {
    _id,
    wishlisted,
    cart,
    imageUrl,
    altText,
    itemName,
    itemDesc,
    sellingPrice,
    costPrice,
    rating,
    category,
  } = product;
  document.title = itemName;
  return (
    <>
      <NavBar />
      <main className="fx product-desc">
        <div className="product-img w-half fx fx-jc-center fx-ai-center">
          <img className="img-res-w" src={imageUrl} alt={altText} />
        </div>
        <div className="w-half fx-col fx-jc-center">
          <div className="fx fx-ai-center">
            <h2 className="mg-b-1">{itemName}</h2>
            <span
              className={` clr-gray-50 brd-sm f-1 mg-i-4 mg-b-auto pd-b-0125 pd-i-025 ${
                rating >= 3 ? "bg-clr-green-500" : "bg-clr-orange-500"
              }`}
            >
              <i className="fa-solid fa-star"></i>
              {rating}
            </span>
          </div>
          <h4>
            Category: {category.charAt(0).toUpperCase() + category.slice(1)}
          </h4>
          <div>
            <p className="mg-b-05">
              Price:
              <span className="tx-lt pd-i-05">
                <span className="ff-nunito">&#8377;</span>
                {costPrice}
              </span>
              <span className="ff-nunito">&#8377;</span>
              {sellingPrice}
            </p>
            <button className="pd-0625 brd-sm mg-i-025 bg-clr-yellow-300">
              {cart ? (
                <Link to="/cart">Go to cart</Link>
              ) : (
                <span
                  onClick={() => {
                    dispatch({
                      type: "ADD_TO_CART",
                      payload: { itemId: _id },
                    });
                    toastMessage("SUCCESS", "Product added to Cart");
                  }}
                >
                  Add to cart
                </span>
              )}
            </button>
            <button
              className="pd-0625 brd-sm mg-i-025 bg-clr-gray-300"
              onClick={() => {
                dispatch({ type: "ADD_TO_WISHLIST", payload: { itemId: _id } });
                wishlisted
                  ? toastMessage("INFO", "Product removed from wishlist")
                  : toastMessage("SUCCESS", "Product added to wishlist");
              }}
            >
              {wishlisted ? "Remove from Wishlist" : "Add to wishlist"}
            </button>
            <p className="mg-b-1">
              <b>Description:</b> {itemDesc}
            </p>
          </div>
        </div>
      </main>
    </>
  );
}

export { SingleProduct };
