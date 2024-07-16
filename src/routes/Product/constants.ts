import mainImage from "../../assets/matthew-hamilton-VGR_-NTYVZE-unsplash.jpg";
import subImageOne from "../../assets/ronit-singh-Pik6W2QNMCQ-unsplash.jpg";
import subImageTwo from "../../assets/joseph-barrientos-4qSb_FWhHKs-unsplash.jpg";
import { ISelectedValues, IShoe } from "../../globals/interfaces/structures";

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
