import React from "react";
import { Filter, NavBar, Products } from "../../components";

document.title = "SnowStore-react | Products";
function ProductListing() {
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
