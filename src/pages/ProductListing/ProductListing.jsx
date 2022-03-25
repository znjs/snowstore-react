import React from "react";
import { Filter, NavBar, Products } from "../../components";

function ProductListing() {
  document.title = "SnowStore-react | Products";
  return (
    <div>
      <NavBar />
      <div className="fx p-rel">
        <Filter />
        <Products />
      </div>
    </div>
  );
}

export { ProductListing };
