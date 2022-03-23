import { nanoid } from "nanoid";
import { faker } from "@faker-js/faker";
import { imageUrls } from "./imageUrls";
/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  ...[...Array(45)].map((ele, index) => {
    return {
      _id: nanoid(),
      itemName: faker.commerce.product(),
      costPrice: faker.commerce.price(200, 5999, 2),
      sellingPrice: faker.commerce.price(200, 5999, 2),
      rating: faker.datatype.float({
        min: 1,
        max: 5,
        precision: 0.1,
      }),
      itemDesc:
        "lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem ",
      imageUrl: `https://picsum.photos/200/300?random=${index}`,
      altText: "Item Image",
      discount: true,
      wishlisted: false,
      cart: false,
      saveForLater: false,
      outOfStoack: false,
      itemCount: 100,
      cartItemCount: 0,
      category: imageUrls[index].split(".")[2].split("/")[4],
    };
  }),
];
