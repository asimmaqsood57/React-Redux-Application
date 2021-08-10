import { ActionTypes } from "../constants/action-types";

const initialState = {
  products: [
    {
      id: 1,
      title: "computer",
      category: "programmer",
    },
  ],
};

export const productReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SELECTED_PRODUCT:
      return state;

    default:
      return state;
  }
};
