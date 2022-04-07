import { Types } from "../actions/types";

const initialState = [];

export default function productsReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case Types.LIST_ALL_PRODUCTS:
      return {
        ...payload,
      };

    default:
      return state;
  }
}
