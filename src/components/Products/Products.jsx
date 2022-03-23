import React from "react";
import { useFilter } from "../../context";
import { ProductCard } from "../ProductCard/ProductCard";

function Products() {
  const { productsState } = useFilter();
  // console.log(productsState.products);
  // console.log(data);
  return (
    <div className="fx fx-wrap">
      {productsState.products.length > 0 &&
        productsState.products.map((item) => (
          <ProductCard key={item._id} item={item} />
        ))}
    </div>
  );
}

export { Products };
