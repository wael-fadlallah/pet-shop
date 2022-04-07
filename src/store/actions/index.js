import axios from "axios";
import { Types } from "./types";

export const getProducts = () => {
  return (dispatch) => {
    axios.get("https://fakestoreapi.com/products").then((res) => {
      if (res.status) {
        dispatch(listProducts(res.data));
      }
    });
  };
};

const listProducts = (products) => ({
  type: Types.LIST_ALL_PRODUCTS,
  payload: {
    ...products,
  },
});
