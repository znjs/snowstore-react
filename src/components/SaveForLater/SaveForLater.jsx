import React from "react";
import { useFilter } from "../../context";

function SaveForLater({
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
    count,
    cartItemCount,
  },
}) {
  const { dispatch } = useFilter();
  return (
    <>
      <div className="mg-b-1 p-rel bg-clr-gray-50 h-15 w-full brd-sm o-hide brd-hov  fx-row">
        <div className="preview-img w-15">
          <img className="img-res h-min-10" src={imageUrl} alt={altText} />
        </div>
        <div className="pd-i-0625 fx-col fx-wrap fx-jc-se w-full">
          <h3>{itemName}</h3>
          <h5>
            <span className="tx-lt clr-gray-500">&#8377;{costPrice}</span>
            <span className="pd-i-0625">&#8377;{sellingPrice}</span>
            <span className="clr-red-400">only</span>
          </h5>
          <p className="f-075">{itemDesc}</p>
          <div className="pd-b-1 fx-row mg-i-2 fx-ai-center fx-wrap">
            <div className="count-control brd-sm o-hide">
              <button className="decrease pd-025 bg-clr-yellow-300">-</button>
              <span className="pd-025">1</span>
              <button className="increase pd-025 bg-clr-yellow-300">+</button>
            </div>
            <button
              className="pd-0625 brd-sm mg-i-05 bg-clr-yellow-300"
              onClick={() => {
                dispatch({ type: "ADD_TO_CART", payload: { itemId: _id } });
              }}
            >
              Move to cart
            </button>
            <button
              className="pd-0625 brd-sm mg-i-05"
              onClick={() => {
                dispatch({
                  type: "REMOVE_FROM_CART",
                  payload: { itemId: _id },
                });
              }}
            >
              Remove
            </button>
          </div>
        </div>
        <div className="p-abs bg-clr-gray-50 brd-round h-105 w-105 item-center top-lft mg-05">
          <i className="far fa-heart clr-red-400 "></i>
        </div>
      </div>
    </>
  );
}

export { SaveForLater };
