import { ISelectedValues, IShoe } from "../../interfaces/Product";

import mainImage from "../../Assets/matthew-hamilton-VGR_-NTYVZE-unsplash.jpg";
import subImageOne from "../../Assets/ronit-singh-Pik6W2QNMCQ-unsplash.jpg";
import subImageTwo from "../../Assets/joseph-barrientos-4qSb_FWhHKs-unsplash.jpg";

// Placeholder
export const availableShoes: IShoe = {
  name: "Nike Jordan one",
  price: 2300,
  discount: true,
  discountedPrice: 200,
  images: [mainImage, subImageOne, subImageTwo, subImageOne],
  colors: ["red", "white", "blue", "orange"],
  sizes: [7, 9, 5, 10],
};
export const defaultSelectedValues: ISelectedValues = {
  color: "",
  size: undefined,
  quantity: 1,
};
