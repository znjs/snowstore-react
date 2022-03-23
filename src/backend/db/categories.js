import { nanoid } from "nanoid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: nanoid(),
    categoryName: "Clothing",
    description: "Colthing section",
  },
  {
    _id: nanoid(),
    categoryName: "Decoration",
    description: "Decoration items for christmas",
  },
  {
    _id: nanoid(),
    categoryName: "Caps",
    description: "Head caps for all fashion",
  },
  {
    _id: nanoid(),
    categoryName: "Sweaters",
    description: "Sweater for winter time",
  },
  {
    _id: nanoid(),
    categoryName: "Gift",
    description: "Surprise gift for special ones",
  },
];
