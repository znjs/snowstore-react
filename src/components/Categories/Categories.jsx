import React from "react";
import { NavLink } from "react-router-dom";

function Categories() {
  return (
    <>
      <div className="categories fx-row ">
        <div className="category-cloth fx-row fx-jc-center fx-ai-center">
          <NavLink to="/products">
            <span className="category-title clr-gray-50 pd-i-0625">
              Winter Clothing
            </span>
          </NavLink>
        </div>
        <div className="category-wrapper fx-col">
          <div className="category-decors fx-row fx-ai-center fx-jc-center ta-right">
            <NavLink to="/products">
              <span className="category-title clr-gray-50 pd-i-1">
                Decors and Accessories
              </span>
            </NavLink>
          </div>
          <div className="category-gift fx-row fx-ai-fe">
            <NavLink to="/products">
              <span className="category-title clr-gray-50 pd-i-0625">
                Gifts
              </span>
            </NavLink>
          </div>
        </div>
        <div className="category-tree">
          <NavLink to="/products">
            <span className="category-title clr-gray-50">Christmas trees</span>
          </NavLink>
        </div>
      </div>
    </>
  );
}

export { Categories };
