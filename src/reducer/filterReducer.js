import { toastMessage } from "../utils/toastMessage";
import {
  RATING_FILTER,
  CATEGORY_FILTER,
  PRICE_FILTER,
  SORT_PRICE_ASC_FILTER,
  CLEAR_FILTER,
  ADD_TO_WISHLIST,
  ADD_TO_CART,
  MOVE_TO_SAVE_FOR_LATER,
  REMOVE_FROM_CART,
  MOVE_TO_CART,
  INC_CART_COUNT,
  DEC_CART_COUNT,
  UPDATE_DEFAULT,
  UPDATE_SEARCH_TEXT,
  SEARCH_PRODUCT,
  CLEAR_CART,
} from "./constants";

const filterReducer = (productsState, action) => {
  const initialState = {
    rating: null,
    category: [],
    maxPrice: 6000,
    sortOrder: 0,
    products: productsState.default,
    searchText: "",
    default: productsState.default,
  };
  let productsStateCopy = { ...productsState };
  switch (action.type) {
    case UPDATE_DEFAULT:
      productsStateCopy = {
        ...productsStateCopy,
        default: action.payload.default,
        products: action.payload.default,
      };
      break;
    case RATING_FILTER:
      productsStateCopy = {
        ...productsStateCopy,
        rating: action.payload.rating,
      };
      productsStateCopy = {
        ...productsStateCopy,
        products: [
          ...initialState.products.filter(
            (item) => item.rating >= productsStateCopy.rating
          ),
        ],
      };
      break;
    case CATEGORY_FILTER:
      productsStateCopy = {
        ...productsStateCopy,
        category: [
          ...(productsStateCopy.category.includes(
            action.payload.checked.toLowerCase()
          )
            ? productsStateCopy.category.filter(
                (item) => item !== action.payload.checked.toLowerCase()
              )
            : [
                ...productsStateCopy.category,
                action.payload.checked.toLowerCase(),
              ]),
        ],
      };
      productsStateCopy = {
        ...productsStateCopy,
        products: [
          ...(productsStateCopy.category.length
            ? initialState.products.filter((item) =>
                productsStateCopy.category.includes(item.category)
              )
            : initialState.products),
        ],
      };
      break;
    case PRICE_FILTER:
      productsStateCopy = {
        ...productsStateCopy,
        maxPrice: action.payload.price,
      };
      productsStateCopy = {
        ...productsStateCopy,
        products: [
          ...initialState.products.filter(
            (item) => item.sellingPrice <= action.payload.price
          ),
        ],
      };
      break;
    case SORT_PRICE_ASC_FILTER:
      productsStateCopy = {
        ...productsStateCopy,
        sortOrder: action.payload.sortOrder,
      };
      productsStateCopy = {
        ...productsStateCopy,
        products: [
          ...[...initialState.products].sort((item1, item2) => {
            return productsStateCopy.sortOrder === 1
              ? item1.sellingPrice - item2.sellingPrice
              : item2.sellingPrice - item1.sellingPrice;
          }),
        ],
      };
      break;
    case ADD_TO_WISHLIST:
      productsStateCopy = {
        ...productsStateCopy,
        products: [
          ...productsStateCopy.products.map((ele) => {
            if (ele._id === action.payload.itemId) {
              return { ...ele, wishlisted: !ele.wishlisted };
            }
            return ele;
          }),
        ],
      };
      productsStateCopy = {
        ...productsStateCopy,
        default: [
          ...productsStateCopy.default.map((ele) => {
            if (ele._id === action.payload.itemId) {
              return { ...ele, wishlisted: !ele.wishlisted };
            }
            return ele;
          }),
        ],
      };
      break;
    case ADD_TO_CART:
      productsStateCopy = {
        ...productsStateCopy,
        products: [
          ...productsStateCopy.products.map((ele) => {
            if (ele._id === action.payload.itemId) {
              return {
                ...ele,
                cart: true,
                cartItemCount: ele.cartItemCount || 1,
                saveForLater: false,
              };
            }
            return ele;
          }),
        ],
      };
      productsStateCopy = {
        ...productsStateCopy,
        default: [
          ...productsStateCopy.default.map((ele) => {
            if (ele._id === action.payload.itemId) {
              return {
                ...ele,
                cart: true,
                cartItemCount: ele.cartItemCount || 1,
                saveForLater: false,
              };
            }
            return ele;
          }),
        ],
      };
      break;
    case MOVE_TO_SAVE_FOR_LATER:
      productsStateCopy = {
        ...productsStateCopy,
        products: [
          ...productsStateCopy.products.map((ele) => {
            if (ele._id === action.payload.itemId) {
              return { ...ele, cart: false, saveForLater: true };
            }
            return ele;
          }),
        ],
      };
      productsStateCopy = {
        ...productsStateCopy,
        default: productsStateCopy.products,
      };
      break;
    case REMOVE_FROM_CART:
      productsStateCopy = {
        ...productsStateCopy,
        products: [
          ...productsStateCopy.products.map((ele) => {
            if (ele._id === action.payload.itemId) {
              return {
                ...ele,
                cart: false,
                saveForLater: false,
                cartItemCount: 0,
              };
            }
            return ele;
          }),
        ],
      };
      productsStateCopy = {
        ...productsStateCopy,
        default: productsStateCopy.products,
      };
      toastMessage("INFO", "Product removed from cart");
      break;

    case MOVE_TO_CART:
      productsStateCopy = {
        ...productsStateCopy,
        products: [
          ...productsStateCopy.products.map((ele) => {
            if (ele._id === action.payload.itemId) {
              return {
                ...ele,
                wishlisted: false,
                cart: true,
                cartItemCount: ele.cartItemCount || 1,
                saveForLater: false,
              };
            }
            return ele;
          }),
        ],
      };
      productsStateCopy = {
        ...productsStateCopy,
        default: productsStateCopy.products,
      };
      toastMessage("SUCCESS", "Product moved to cart");
      break;

    case INC_CART_COUNT:
      productsStateCopy = {
        ...productsStateCopy,
        products: [
          ...productsStateCopy.products.map((ele) => {
            if (ele._id === action.payload.itemId) {
              return {
                ...ele,
                cartItemCount: ele.cartItemCount + 1,
              };
            }
            return ele;
          }),
        ],
      };
      productsStateCopy = {
        ...productsStateCopy,
        default: productsStateCopy.products,
      };
      break;
    case DEC_CART_COUNT:
      productsStateCopy = {
        ...productsStateCopy,
        products: [
          ...productsStateCopy.products.map((ele) => {
            if (ele._id === action.payload.itemId) {
              return {
                ...ele,
                cart: ele.cartItemCount === 1 ? false : ele.cart,
                saveForLater:
                  ele.cartItemCount === 1 ? false : ele.saveForLater,
                cartItemCount:
                  ele.cartItemCount === 1 ? 0 : ele.cartItemCount - 1,
              };
            }
            return ele;
          }),
        ],
      };
      productsStateCopy = {
        ...productsStateCopy,
        default: productsStateCopy.products,
      };
      break;
    case UPDATE_SEARCH_TEXT:
      productsStateCopy = {
        ...productsStateCopy,
        searchText: action.payload.text,
      };
      break;
    case SEARCH_PRODUCT:
      productsStateCopy = {
        ...productsStateCopy,
        products:
          productsStateCopy.searchText !== ""
            ? productsStateCopy.default.filter((item) =>
                item.itemName
                  .toLowerCase()
                  .includes(productsStateCopy.searchText.toLowerCase())
              )
            : productsStateCopy.default,
      };
      break;
    case CLEAR_FILTER:
      productsStateCopy = {
        ...initialState,
        default: productsStateCopy.default,
      };
      break;
    case CLEAR_CART:
      productsStateCopy = {
        ...productsStateCopy,
        default: productsStateCopy.default.map((item) => ({
          ...item,
          cart: false,
        })),
        products: productsStateCopy.products.map((item) => ({
          ...item,
          cart: false,
        })),
      };
      break;
    default:
      break;
  }
  if (productsStateCopy.category.length && !action.payload?.checked) {
    productsStateCopy = {
      ...productsStateCopy,
      products: [
        ...productsStateCopy.products.filter((item) =>
          productsStateCopy.category.includes(item.category)
        ),
      ],
    };
  }
  if (productsStateCopy.maxPrice !== 6000 && !action.payload?.price) {
    productsStateCopy = {
      ...productsStateCopy,
      products: [
        ...productsStateCopy.products.filter(
          (item) => item.sellingPrice <= productsStateCopy?.maxPrice
        ),
      ],
    };
  }
  if (productsStateCopy.rating && !action.payload?.rating) {
    productsStateCopy = {
      ...productsStateCopy,
      products: [
        ...productsStateCopy.products.filter(
          (item) => item.rating >= productsStateCopy.rating
        ),
      ],
    };
  }
  if (productsStateCopy.sortOrder && !action.payload?.sortOrder) {
    productsStateCopy = {
      ...productsStateCopy,
      products: [
        ...[...productsStateCopy.products].sort((item1, item2) => {
          return productsStateCopy.sortOrder === 1
            ? item1.sellingPrice - item2.sellingPrice
            : item2.sellingPrice - item1.sellingPrice;
        }),
      ],
    };
  }
  return { ...productsStateCopy };
};

export { filterReducer };
