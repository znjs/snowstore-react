import React, { useReducer } from "react";
import { useNavigate } from "react-router-dom";
import { NavBar } from "../../components";
import { useFilter } from "../../context/filter-context";
import { displayRazorpay } from "../../utils";
import "./checkout.css";
const COUPONS = { FIRST50: 0.1, APRILFOOLS: 0.25 };
const couponReducer = (couponState, action) => {
  switch (action.type) {
    case "UPDATE_COUPON":
      return { ...couponState, coupon: action.payload.coupon };
    case "UPDATE_APPLY_COUPON":
      return {
        ...couponState,
        applyCoupon: true,
        discount: Object.keys(COUPONS).includes(
          couponState.coupon.toUpperCase()
        )
          ? COUPONS[couponState.coupon]
          : 0,
      };
    default:
      return couponState;
  }
};
function Checkout() {
  const navigate = useNavigate("");
  const [couponState, couponDispatch] = useReducer(couponReducer, {
    coupon: "",
    applyCoupon: false,
    discount: 0,
  });
  const { productsState, dispatch } = useFilter();
  const cartProducts = productsState.products.filter((product) => product.cart);
  const totalCostPrice = cartProducts.reduce(
    (acc, curr) => acc + parseFloat(curr.costPrice),
    0
  );
  const totalSellingtPrice = cartProducts.reduce(
    (acc, curr) => acc + parseFloat(curr.sellingPrice),
    0
  );
  const discountOff = totalCostPrice - totalSellingtPrice;
  return (
    <div className="h-screen">
      <NavBar />
      <div className="fx fx-col h-full">
        <h1 className="ta-center">Cart Summary</h1>
        <div className="fx fx-jc-se fx-grow">
          <div className="fx w-max-20 bg-clr-gray-200 fx-as-fs pd-1 brd-sm">
            <input
              className="mg-b-025 mg-i-0125"
              type="radio"
              id="address1"
              name="address1"
              value="address1"
            />
            <label for="address1">
              <p>
                #107, 8A, THE BAY, RMZ Eco World Rd, opposite to Adarsh Palm,
                Bellandur, Bengaluru, Karnataka 560103
              </p>
              <p>Contact: 9638527410</p>
            </label>
          </div>
          <div className="fx fx-col w-16 pd-05 ">
            <div className="fx fx-ai-center fx-jc-se">
              <i className="fa-solid fa-ticket f-105 clr-green-400 pd-0625"></i>
              <input
                value={couponState.coupon}
                onChange={(e) =>
                  couponDispatch({
                    type: "UPDATE_COUPON",
                    payload: { coupon: e.target.value },
                  })
                }
                className="f-1 pd-025"
                type="text"
                id="coupon"
                name="coupon"
                placeholder="Enter your coupon"
              />
              <button
                onClick={() =>
                  couponDispatch({
                    type: "UPDATE_APPLY_COUPON",
                    payload: { applyCoupon: true },
                  })
                }
                className="bg-clr-yellow-300 pd-05 brd-sm mg-i-05"
              >
                Apply
              </button>
            </div>
            <div className="fx">
              <div className="w-10 ta-left fw-600">Item Name</div>
              <div className="w-6 ta-right fw-600">Price</div>
            </div>
            <hr />
            {cartProducts.map((item) => (
              <div className="fx">
                <div className="w-10 ta-left">{item.itemName}</div>
                <div className="w-6 ta-right">
                  &#8377;&nbsp;
                  {(item.sellingPrice * item.cartItemCount).toFixed(2)}
                </div>
              </div>
            ))}
            <hr />
            <div className="fx">
              <div className="w-10 ta-left">Discount</div>
              <div className="w-6 ta-right clr-green-600">
                &#8377;&nbsp;{discountOff.toFixed(2)}
              </div>
            </div>
            <hr />
            <div className="fx">
              <div className="w-10 ta-left fw-600">Total Cost</div>
              <div className="w-6 ta-right ">
                &#8377;&nbsp;{totalSellingtPrice.toFixed(2)}
              </div>
            </div>
            <div className="fx">
              <div className="w-10 ta-left fw-600">GST</div>
              <div className="w-6 ta-right ">
                &#8377;&nbsp;{(totalSellingtPrice * 0.12).toFixed(2)}
              </div>
            </div>
            <hr />
            {couponState.applyCoupon && (
              <div>
                {couponState.discount ? (
                  <>
                    <div className="fx fx-jc-sb">
                      <p className="fw-600">Coupon Applied</p>
                      <p className="clr-gray-500 cr-pt tx-ul">Remove</p>
                    </div>
                    <div className="fx">
                      <p className="w-10 ta-left">{couponState.coupon}</p>
                      <p className="w-6 ta-right">
                        &#8377;&nbsp;
                        {(couponState.discount * totalSellingtPrice).toFixed(2)}
                      </p>
                    </div>
                  </>
                ) : (
                  <p className="clr-red-400">*Invalid discount coupon</p>
                )}
              </div>
            )}
            <div className="fx">
              <div className="w-10 ta-left fw-800">Total Price</div>
              <div className="w-6 ta-right ">
                &#8377;&nbsp;
                {(
                  totalSellingtPrice * 1.12 -
                  couponState.discount * totalSellingtPrice
                ).toFixed(2)}
              </div>
            </div>
            <button
              onClick={() =>
                displayRazorpay(
                  (
                    totalSellingtPrice * 1.12 -
                    couponState.discount * totalSellingtPrice
                  ).toFixed(2),
                  () => {
                    navigate("/products");
                    dispatch({ type: "CLEAR_CART" });
                  }
                )
              }
              className="mg-b-025 bg-clr-yellow-300 f-085 pd-b-0125 brd-sm fw-600"
            >
              Pay with Razorpay
            </button>
            <button
              onClick={() => navigate("/cart")}
              className="mg-b-025 bg-clr-gray-300 f-085 pd-b-0125 brd-sm "
            >
              Back to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Checkout };
