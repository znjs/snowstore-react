import { nanoid } from "nanoid";
import React, { useState } from "react";
import {
  FILTER_CATEGORIES,
  RATING_FILTER,
  CATEGORY_FILTER,
  PRICE_FILTER,
  CLEAR_FILTER,
  SORT_PRICE_ASC_FILTER,
} from "../../reducer";
import { useFilter } from "../../context";
import "./filter.css";

function Filter() {
  const [price, setPrice] = useState("6000");
  const { dispatch, productsState } = useFilter();
  return (
    <div className="w-min-16 pd-1 bg-clr-gray-100 p-stick top lft filter-height">
      <div className="fx fx-jc-sb pd-b-1">
        <h3>Filter</h3>
        <span
          className="clr-gray-800 tx-ul cr-pt clear-filter"
          onClick={() => {
            dispatch({ type: CLEAR_FILTER });
            setPrice(6000);
          }}
        >
          clear filter
        </span>
      </div>
      <hr className="hr" />
      <div className=" fx-col">
        <h3>Rating</h3>
        {[4, 3, 2, 1].map((ele) => (
          <div key={nanoid()}>
            <input
              type="radio"
              id={ele}
              name="rating"
              value=""
              checked={productsState.rating === ele}
              onChange={() =>
                dispatch({ type: RATING_FILTER, payload: { rating: ele } })
              }
            />
            <label htmlFor={ele}>
              {[1, 2, 3, 4, 5].map((count) =>
                count > ele ? (
                  <i
                    className="fa-regular fa-star clr-yellow-400"
                    key={nanoid()}
                  />
                ) : (
                  <i
                    className="fa-solid fa-star clr-yellow-400"
                    key={nanoid()}
                  />
                )
              )}{" "}
              &amp; above
            </label>
          </div>
        ))}
      </div>
      <hr className="hr" />

      <div className="fx-col">
        <h3>Category</h3>
        {FILTER_CATEGORIES.map((ele) => (
          <div className="pd-i-05 fx  fx-ai-center" key={nanoid()}>
            <input
              type="checkbox"
              id={ele}
              name="categories"
              value={ele}
              checked={productsState.category.includes(ele.toLowerCase())}
              onChange={() => {
                dispatch({
                  type: CATEGORY_FILTER,
                  payload: { checked: ele },
                });
              }}
            />
            <label htmlFor={ele}>{ele}</label>
          </div>
        ))}
      </div>
      <hr className="hr" />
      <div className="fx-col ">
        <h3>Price</h3>
        <div className="fx fx-ai-center fx-jc-sb w-four-fifth">
          <p>200</p>
          <p>{price}</p>
        </div>
        <input
          className=" w-four-fifth"
          type="range"
          name="price"
          id="price"
          min="200"
          max="6000"
          value={price}
          step="20"
          onChange={(e) => setPrice(e.target.value)}
          onMouseUp={(e) => {
            dispatch({
              type: PRICE_FILTER,
              payload: { price: e.target.value },
            });
          }}
        />
      </div>
      <hr className="hr" />
      <div className="fx-col">
        <h3>Sort by</h3>
        <div className="fx fx-ai-center">
          <input
            type="radio"
            id="low-to-high"
            name="price-sorting"
            value="low-to-high"
            checked={productsState.sortOrder === 1}
            onChange={() => {
              dispatch({
                type: SORT_PRICE_ASC_FILTER,
                payload: { sortOrder: 1 },
              });
            }}
          />
          <label htmlFor="low-to-high">price low-to-high</label>
        </div>
        <div className=" fx fx-ai-center">
          <input
            type="radio"
            id="high-to-low"
            name="price-sorting"
            value="high-to-low"
            checked={productsState.sortOrder === 2}
            onChange={() => {
              dispatch({
                type: SORT_PRICE_ASC_FILTER,
                payload: { sortOrder: 2 },
              });
            }}
          />
          <label htmlFor="high-to-low">price high-to-low</label>
        </div>
      </div>
    </div>
  );
}

export { Filter };
