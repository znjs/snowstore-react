import axios from "axios";
import { useEffect, useState, useContext, createContext } from "react";
const ProductContext = createContext();
const ProductProvider = ({ children }) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get("/api/products");

        setData(res.data.products);
      } catch (err) {
        console.error("Error: ", err);
      }
    })();
  }, []);
  return (
    <ProductContext.Provider value={{ data }}>
      {children}
    </ProductContext.Provider>
  );
};

const useProduct = () => useContext(ProductContext);

export { ProductProvider, useProduct };
