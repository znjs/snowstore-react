import React from "react";
import { NavLink } from "react-router-dom";
import { useFilter } from "../../context";

function Categories() {
  const { dispatch } = useFilter();
  return (
    <>
      <div className="categories fx-row ">
        <div className="category-cloth fx-row fx-jc-center fx-ai-center">
          <NavLink
            to="/products"
            onClick={() => {
              dispatch({
                type: "CATEGORY_FILTER",
                payload: { checked: "Clothing" },
              });
            }}
          >
            <span className="category-title clr-gray-50 pd-i-0625">
              Winter Clothing
            </span>
          </NavLink>
        </div>
        <div className="category-wrapper fx-col">
          <div className="category-decors fx-row fx-ai-center fx-jc-fe ta-right">
            <NavLink
              to="/products"
              onClick={() => {
                dispatch({
                  type: "CATEGORY_FILTER",
                  payload: { checked: "Decoration" },
                });
              }}
            >
              <span className="category-title clr-gray-50 pd-i-1">
                Decors and Accessories
              </span>
            </NavLink>
          </div>
          <div className="category-gift fx-row fx-ai-fe">
            <NavLink
              to="/products"
              onClick={() => {
                dispatch({
                  type: "CATEGORY_FILTER",
                  payload: { checked: "Gift" },
                });
              }}
            >
              <span className="category-title clr-gray-50 pd-i-0625">
                Gifts
              </span>
            </NavLink>
          </div>
        </div>
        <div className="category-tree fx-row fx-jc-fe">
          <NavLink
            to="/products"
            onClick={() =>
              dispatch({
                type: "CATEGORY_FILTER",
                payload: { checked: "Caps" },
              })
            }
          >
            <span className="category-title clr-gray-800">Caps</span>
          </NavLink>
        </div>
      </div>
    </>
  );
}

export { Categories };
