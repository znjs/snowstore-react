import React from "react";
import "./nav.css";
import { logo } from "../../assets";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { useFilter } from "../../context";
import {
  CLEAR_FILTER,
  UPDATE_SEARCH_TEXT,
  SEARCH_PRODUCT,
} from "../../reducer";
function NavBar() {
  const JWT = localStorage.getItem("JWT_TOKEN");
  const { productsState, dispatch } = useFilter();
  const cartItems = productsState.default.filter((ele) => ele.cart);
  const wishlistItems = productsState.default.filter((ele) => ele.wishlisted);
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <>
      <nav className="pd-05 fx-row w-full bg-clr-gray-800 clr-gray-50">
        <div className="nav-icon fx-row fx-ai-center mg-i-1025 h-3">
          <NavLink to="/">
            <img
              src={logo}
              alt=""
              className="h-2 w-2"
              onClick={() => {
                dispatch({ type: CLEAR_FILTER });
              }}
            />
          </NavLink>
          <NavLink to="/">
            <span
              className="ff-festive mg-i-1025 f-2 clr-gray-50 fw-700"
              onClick={() => {
                dispatch({ type: CLEAR_FILTER });
              }}
            >
              Snowstore
            </span>
          </NavLink>
        </div>
        {JWT ? (
          <div className="fx-row fx-ai-center cr-pt">
            <i className="fa-solid fa-location-dot f-1025 pd-i-025"></i>
            <p className="f-085" onClick={() => navigate("/profile")}>
              <b>Hello</b>
              <br />
              Select your address
            </p>
          </div>
        ) : (
          <></>
        )}
        <input
          type="search"
          placeholder="Search"
          value={productsState.searchText}
          onChange={(e) =>
            dispatch({
              type: UPDATE_SEARCH_TEXT,
              payload: { text: e.target.value },
            })
          }
          className="pd-i-05 mg-i-1 brd-sm flex fx-grow"
          onKeyUp={(e) => {
            if (e.key === "Enter" || e.key === "Backspace") {
              if (location.pathname !== "/products") {
                navigate("/products");
              }
              dispatch({
                type: SEARCH_PRODUCT,
              });
            }
          }}
        />
        <ul className="fx-row fx-ai-center links">
          <li className="pd-i-1">
            <NavLink to="/products">
              <span className="clr-gray-50">Products</span>
            </NavLink>
          </li>
          <li
            className="pd-i-1"
            onClick={() =>
              dispatch({
                type: "CATEGORY_FILTER",
                payload: { checked: "Clothing" },
              })
            }
          >
            <NavLink to="/products">
              <span className="clr-gray-50">Christmas Clothing</span>
            </NavLink>
          </li>
          <li
            className="pd-i-1"
            onClick={() =>
              dispatch({
                type: "CATEGORY_FILTER",
                payload: { checked: "Decoration" },
              })
            }
          >
            <NavLink to="/products">
              <span className="clr-gray-50">Decorations</span>
            </NavLink>
          </li>
          <li
            className="pd-i-1"
            onClick={() =>
              dispatch({
                type: "CATEGORY_FILTER",
                payload: { checked: "Caps" },
              })
            }
          >
            <NavLink to="/products">
              <span className="clr-gray-50">Caps</span>
            </NavLink>
          </li>
          {JWT ? (
            <>
              <li>
                <NavLink to="/wishlist">
                  <div className="p-rel mg-i-05">
                    <span className="brd-round h-3 w-3 fx-row fx-jc-center fx-ai-center f-105">
                      <i className="fa-solid fa-heart clr-red-500"></i>
                    </span>
                    <span className="p-abs brd-round notification rgt top bg-clr-green-600 f-075 clr-gray-50 fx fx-jc-center fx-ai-center">
                      {wishlistItems.length}
                    </span>
                  </div>
                </NavLink>
              </li>
              <li>
                <NavLink to="/cart">
                  <div className="p-rel mg-i-05">
                    <span className="brd-round bg-clr-yellow-500 h-3 w-3 fx-row fx-jc-center fx-ai-center f-105">
                      <i className="clr-gray-50 fas fa-shopping-cart"></i>
                    </span>
                    <span className="p-abs brd-round notification rgt top bg-clr-green-600 f-075 clr-gray-50 fx fx-jc-center fx-ai-center">
                      {cartItems.length}
                    </span>
                  </div>
                </NavLink>
              </li>
              <li>
                <NavLink to="/profile">
                  <div className="mg-i-05">
                    <span className="h-3 w-3 fx fx-jc-center fx-ai-center bg-clr-gray-50 brd-round">
                      <i className="fa-solid fa-user clr-gray-900"></i>
                    </span>
                  </div>
                </NavLink>
              </li>
            </>
          ) : (
            <li className="pd-i-1">
              <NavLink to="/signin">
                <span className="clr-gray-50">Sign-in/Sign-up</span>
              </NavLink>
            </li>
          )}
        </ul>
      </nav>
    </>
  );
}

export { NavBar };
