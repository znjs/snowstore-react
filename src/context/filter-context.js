import { createContext, useContext, useReducer, useEffect } from "react";
import { filterReducer } from "../reducer";
import { useProduct } from "./product-context";

const initialState = {
  rating: null,
  category: [],
  maxPrice: 6000,
  sortOrder: 0,
  products: [],
  default: [],
  searchText: "",
};

const FilterContext = createContext();
const FilterProvider = ({ children }) => {
  const { data } = useProduct();
  const [productsState, dispatch] = useReducer(filterReducer, {
    ...initialState,
  });
  useEffect(() => {
    dispatch({ type: "UPDATE_DEFAULT", payload: { default: data } });
  }, [data]);
  return (
    <FilterContext.Provider value={{ productsState, dispatch }}>
      {children}
    </FilterContext.Provider>
  );
};

const useFilter = () => useContext(FilterContext);

export { FilterProvider, useFilter };
