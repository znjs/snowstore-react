import React from "react";
import { useFilter } from "../../context";
import { ProductCard } from "../ProductCard/ProductCard";
function Products() {
  const { productsState } = useFilter();
  return (
    <div className="fx fx-jc-se fx-wrap productListing">
      {productsState.products.length > 0 &&
        productsState.products.map((item) => (
          <ProductCard key={item._id} item={item} />
        ))}
      <div className="o-hide p-rel bg-clr-gray-50 w-16 mg-1 fx-as-fs"></div>
      <div className="o-hide p-rel bg-clr-gray-50 w-16 mg-1 fx-as-fs"></div>
      <div className="o-hide p-rel bg-clr-gray-50 w-16 mg-1 fx-as-fs"></div>
      <div className="o-hide p-rel bg-clr-gray-50 w-16 mg-1 fx-as-fs"></div>
    </div>
  );
}

export { Products };
